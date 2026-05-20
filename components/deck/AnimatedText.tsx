"use client";

import { motion } from "framer-motion";

/**
 * Word-by-word slide-up reveal. The masking container has a small bottom
 * padding so descenders (g, p, y) don't clip during entrance. Stagger and
 * duration are tuned for snappy, cohesive feel (not "broken" or "delayed").
 */
export function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 0.035,
  duration = 0.65,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={`${className} inline`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block whitespace-nowrap">
          <span
            className="inline-block overflow-hidden align-bottom"
            style={{
              paddingBottom: "0.35em",
              paddingTop: "0.05em",
              lineHeight: 1.15,
            }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: "120%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration,
                ease: [0.25, 1, 0.5, 1],
                delay: delay + i * stagger,
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && <>&nbsp;</>}
        </span>
      ))}
    </span>
  );
}

export function BlurText({
  text,
  className = "",
  delay = 0,
  duration = 1.0,
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration, ease: [0.25, 1, 0.5, 1], delay }}
    >
      {text}
    </motion.span>
  );
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: [0.25, 1, 0.5, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
