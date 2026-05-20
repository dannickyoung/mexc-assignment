"use client";

import { BodyLayout } from "../layouts";
import { AnimatedText, FadeUp } from "../AnimatedText";
import { useT } from "../LanguageContext";

export function LandscapeSlide() {
  const t = useT({
    en: {
      number: "02",
      title: "THE LANDSCAPE",
      headlinePart1: "One crypto AI has a brand.",
      headlinePart2: "The rest have product names.",
      competitors: [
        { exchange: "Bybit", ai: "Aurora", verdict: "Premium, the bar", strong: true },
        { exchange: "Binance", ai: "AI Pro", verdict: "Descriptive label", strong: false },
        { exchange: "OKX", ai: "Moby / Planet / OnchainOS", verdict: "Fragmented", strong: false },
        { exchange: "Bitget", ai: "GetAgent / GetClaw / Gracy", verdict: "Three products, one job", strong: false },
        { exchange: "Crypto.com", ai: "Amy", verdict: "Dated, customer service tone", strong: false },
        { exchange: "KuCoin", ai: "Kia", verdict: "Functional", strong: false },
        { exchange: "Gate", ai: "GateAI", verdict: "Descriptive label", strong: false },
      ],
      conclusion: "Aurora set the bar in 2024. Two years on, the category is still wide open.",
    },
    zh: {
      number: "02",
      title: "市场格局",
      headlinePart1: "只有一家加密交易所",
      headlinePart2: "为 AI 打造了真正的品牌。",
      competitors: [
        { exchange: "Bybit", ai: "Aurora", verdict: "高端，标杆之作", strong: true },
        { exchange: "Binance", ai: "AI Pro", verdict: "描述性命名", strong: false },
        { exchange: "OKX", ai: "Moby / Planet / OnchainOS", verdict: "分散无主线", strong: false },
        { exchange: "Bitget", ai: "GetAgent / GetClaw / Gracy", verdict: "三套产品一种功能", strong: false },
        { exchange: "Crypto.com", ai: "Amy", verdict: "陈旧的客服调性", strong: false },
        { exchange: "KuCoin", ai: "Kia", verdict: "功能性", strong: false },
        { exchange: "Gate", ai: "GateAI", verdict: "描述性命名", strong: false },
      ],
      conclusion: "Aurora 在 2024 年立下了标杆。两年过去，赛道依然开放。",
    },
  });

  return (
    <BodyLayout number={t.number} title={t.title}>
      <h2 className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-4xl">
        <AnimatedText text={t.headlinePart1} delay={0.2} />
        <br />
        <AnimatedText text={t.headlinePart2} delay={0.55} className="text-white/45" />
      </h2>

      <FadeUp delay={1.2} className="mt-10 w-full">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-md">
          {t.competitors.map((c, i) => (
            <div
              key={c.exchange}
              className={`grid grid-cols-[140px_1fr_auto] items-center gap-5 py-3 ${
                i !== t.competitors.length - 1 ? "border-b border-white/8" : ""
              }`}
            >
              <span className="text-xs text-white/50">{c.exchange}</span>
              <span className={`text-sm ${c.strong ? "font-medium text-white" : "text-white"}`}>{c.ai}</span>
              <span className={`text-[11px] ${c.strong ? "font-mono tracking-wider text-xanthus-flame-light" : "text-white/40"}`}>
                {c.verdict}
              </span>
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={1.6} className="mt-6 max-w-2xl">
        <p className="text-sm leading-relaxed text-white/90">{t.conclusion}</p>
      </FadeUp>
    </BodyLayout>
  );
}
