"use client";

import { CoverLayout } from "../layouts";
import { AnimatedText, FadeUp } from "../AnimatedText";
import { MexcLogo } from "../MexcLogo";
import { useT } from "../LanguageContext";

export function CoverSlide() {
  const t = useT({
    en: {
      titleStart: "MEXC AI Brand",
      titleKeyword: "Upgrade",
      subtitle: "From unfinished to premium. A Proposal by Dannick Young.",
    },
    zh: {
      titleStart: "MEXC AI 品牌",
      titleKeyword: "升级",
      subtitle: "从未完成到高端。Dannick Young 提案。",
    },
  });

  return (
    <CoverLayout>
      <FadeUp delay={0.05}>
        <div className="mb-7 flex justify-center">
          <MexcLogo width={70} />
        </div>
      </FadeUp>

      <h1 className="text-4xl font-semibold tracking-tight leading-[1.1] text-white md:text-5xl">
        <AnimatedText text={t.titleStart} delay={0.25} />{" "}
        <AnimatedText text={t.titleKeyword} delay={0.55} className="text-keyword" />
      </h1>

      <FadeUp delay={0.95}>
        <p className="mt-4 text-sm tracking-wide text-white/55">{t.subtitle}</p>
      </FadeUp>
    </CoverLayout>
  );
}
