"use client";

import { BodyLayout } from "../layouts";
import { AnimatedText, FadeUp } from "../AnimatedText";
import { useT } from "../LanguageContext";

export function MissionSlide() {
  const t = useT({
    en: {
      number: "05",
      title: "MISSION ALIGNMENT",
      headlinePart1: "Two sentences.",
      headlinePart2: "Same meaning.",
      left: { label: "MEXC'S AI TAGLINE", phrase: "Precise auxiliary decisions for every trader." },
      right: { label: "XANTHUS'S ROLE", phrase: "A premium AI for Web3, built for the way crypto traders think." },
      conclusion: "Same promise, sharper delivery. Xanthus isn't a creative choice, it's a strategic one for the crypto era.",
    },
    zh: {
      number: "05",
      title: "品牌使命对齐",
      headlinePart1: "两句话。",
      headlinePart2: "同一含义。",
      left: { label: "MEXC AI 标语", phrase: "精准辅助决策。为每一位交易者。" },
      right: { label: "XANTHUS 角色", phrase: "Web3 的高端 AI，为加密交易者的思考方式而生。" },
      conclusion: "同一个承诺，更锋利的表达。Xanthus 不只是一个创意选择，而是为加密时代而设的战略选择。",
    },
  });

  return (
    <BodyLayout number={t.number} title={t.title}>
      <h2 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl">
        <AnimatedText text={t.headlinePart1} delay={0.2} />{" "}
        <AnimatedText text={t.headlinePart2} delay={0.5} className="text-keyword" />
      </h2>

      <FadeUp delay={1.1} className="mt-12 grid max-w-5xl grid-cols-2 gap-5">
        {/* MEXC card - neutral glass */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <div className="font-mono text-[10px] tracking-[0.3em] text-mexc-shakespeare">{t.left.label}</div>
          <div className="mt-3 text-xl font-medium leading-snug text-white">{t.left.phrase}</div>
        </div>

        {/* Xanthus card - orange-themed callout */}
        <div
          className="rounded-2xl border border-[#FF600A]/35 p-6 backdrop-blur-md"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 96, 10, 0.18) 0%, rgba(255, 163, 25, 0.08) 100%)",
            boxShadow: "0 0 40px -10px rgba(255, 96, 10, 0.25)",
          }}
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-xanthus-flame-light">
            {t.right.label}
          </div>
          <div className="mt-3 text-xl font-medium leading-snug text-white">
            {t.right.phrase}
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={1.6} className="mt-10 max-w-3xl">
        <p className="text-sm leading-relaxed text-white/90">{t.conclusion}</p>
      </FadeUp>
    </BodyLayout>
  );
}
