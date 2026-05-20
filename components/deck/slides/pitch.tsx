"use client";

import { CoverLayout } from "../layouts";
import { AnimatedText, FadeUp } from "../AnimatedText";
import { useT } from "../LanguageContext";

export function PitchSlide() {
  const t = useT({
    en: {
      number: "11",
      title: "THE PITCH",
      pre: "Crypto AI keeps shipping chatbots.",
      bigLine1: "Every trader",
      bigLine2Lead: "deserves a",
      bigLine2Keyword: "Xanthus.",
      caption: "The premium AI advisor for Web3.",
      tagline: "XANTHUS × MEXC",
    },
    zh: {
      number: "11",
      title: "主张",
      pre: "加密 AI 还在做聊天机器人。",
      bigLine1: "每位交易者",
      bigLine2Lead: "都应有",
      bigLine2Keyword: "Xanthus。",
      caption: "Web3 的高端 AI 智者。",
      tagline: "XANTHUS × MEXC",
    },
  });

  return (
    <CoverLayout number={t.number} title={t.title}>
      <div className="flex w-full flex-col items-center text-center">
        {/* Setup line (small, muted) */}
        <FadeUp delay={0.2}>
          <p className="text-base tracking-wide text-white/55 md:text-lg">
            {t.pre}
          </p>
        </FadeUp>

        {/* The big payoff (hero text, bold, large) */}
        <h1 className="mt-7 text-5xl font-semibold leading-[1.0] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
          <AnimatedText text={t.bigLine1} delay={0.55} />
          <br />
          <AnimatedText text={t.bigLine2Lead} delay={0.9} />{" "}
          <AnimatedText
            text={t.bigLine2Keyword}
            delay={1.25}
            className="text-keyword"
          />
        </h1>

        {/* Supporting caption */}
        <FadeUp delay={2.0} className="mt-9 max-w-xl">
          <p className="text-sm leading-relaxed text-white/70 md:text-base">
            {t.caption}
          </p>
        </FadeUp>

        {/* Brand signature */}
        <FadeUp delay={2.5} className="mt-12">
          <div className="font-mono text-xs tracking-[0.4em] text-white/55">
            {t.tagline}
          </div>
        </FadeUp>
      </div>
    </CoverLayout>
  );
}
