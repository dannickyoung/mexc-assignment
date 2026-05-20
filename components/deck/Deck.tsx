"use client";

import { useCallback, useEffect, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DeckBackground } from "./Background";
import { useLanguage } from "./LanguageContext";

interface DeckProps {
  slides: ReactNode[];
}

export function Deck({ slides }: DeckProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const { lang, toggle } = useLanguage();

  const next = useCallback(() => {
    setCurrent((c) => {
      if (c < slides.length - 1) {
        setDirection(1);
        return c + 1;
      }
      return c;
    });
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => {
      if (c > 0) {
        setDirection(-1);
        return c - 1;
      }
      return c;
    });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      }
      if (e.key === "Home") {
        e.preventDefault();
        setDirection(-1);
        setCurrent(0);
      }
      if (e.key === "End") {
        e.preventDefault();
        setDirection(1);
        setCurrent(slides.length - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, slides.length]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "6%" : "-6%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-6%" : "6%", opacity: 0 }),
  };

  return (
    <>
      {/* Gradient bg only mounts on slide 2+, runs its scale/opacity entrance
          once on mount then stays idle (no breathing). On slide 1 the body
          black shows through, keeping the cover fully black. */}
      <AnimatePresence>
        {current >= 1 && (
          <motion.div
            key="deck-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-0"
          >
            <DeckBackground />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 z-10 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`${current}-${lang}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.45 },
              opacity: { duration: 0.28 },
            }}
            className="absolute inset-0"
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>

        {/* Language toggle - top right */}
        <button
          type="button"
          onClick={toggle}
          aria-label="Toggle language"
          className="absolute right-6 top-6 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 font-mono text-[11px] tracking-wider text-white/65 transition-all duration-200 hover:bg-white/10 hover:text-white"
        >
          {lang === "en" ? "中" : "EN"}
        </button>

        {/* Bottom navigation */}
        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-5">
          <NavArrow direction="prev" onClick={prev} disabled={current === 0} />

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group flex h-4 cursor-pointer items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ease-out ${
                    i === current
                      ? "h-1.5 w-6 bg-flame-gradient"
                      : "h-1.5 w-1.5 bg-white/20 group-hover:bg-white/45"
                  }`}
                />
              </button>
            ))}
          </div>

          <NavArrow direction="next" onClick={next} disabled={current === slides.length - 1} />
        </div>
      </div>
    </>
  );
}

function NavArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-white/40 transition-colors duration-200 hover:bg-white/5 hover:text-white disabled:cursor-default disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-white/40"
    >
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style={{ transform: direction === "next" ? "rotate(180deg)" : undefined }}>
        <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
