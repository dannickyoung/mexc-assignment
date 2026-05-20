"use client";

import { CoverLayout } from "../layouts";
import { AnimatedText } from "../AnimatedText";
import { useT } from "../LanguageContext";

export function QuestionSlide() {
  const t = useT({
    en: {
      l1: "What if MEXC's AI",
      l2: "felt premium,",
      l3: "and unmistakably Web3?",
    },
    zh: {
      l1: "如果 MEXC 的 AI",
      l2: "既高端、",
      l3: "又纯粹是 Web3？",
    },
  });

  return (
    <CoverLayout>
      <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
        <AnimatedText text={t.l1} delay={0.2} />
        <br />
        <AnimatedText text={t.l2} delay={0.5} />
        <br />
        <AnimatedText text={t.l3} delay={0.8} className="text-keyword" />
      </h1>
    </CoverLayout>
  );
}
