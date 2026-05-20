"use client";

import { VisualLayout } from "../layouts";
import { AnimatedText, FadeUp } from "../AnimatedText";
import { XanthusMark } from "../XanthusMark";
import { useT } from "../LanguageContext";

export function ContextSlide() {
  const t = useT({
    en: {
      number: "10",
      title: "IN CONTEXT",
      headline1: "From placeholder",
      headline2: "to identity.",
      beforeLabel: "BEFORE",
      beforeDesc: "Generic mark, no IP",
      afterLabel: "AFTER",
      afterDesc: "Xanthus IP system",
      tagline: "MEXC-AI",
      taglineSub: "专属 AI 交易助手",
      input: "有问题尽管问…",
      askText: "Ask Xanthus",
      askSub: "Your AI counsel, sharpened",
    },
    zh: {
      number: "10",
      title: "实际应用",
      headline1: "从占位",
      headline2: "到品牌身份。",
      beforeLabel: "改造前",
      beforeDesc: "通用标志，无 IP 形象",
      afterLabel: "改造后",
      afterDesc: "Xanthus 品牌体系",
      tagline: "MEXC-AI",
      taglineSub: "专属 AI 交易助手",
      input: "有问题尽管问…",
      askText: "向 Xanthus 提问",
      askSub: "锋利的 AI 智囊",
    },
  });

  return (
    <VisualLayout number={t.number} title={t.title}>
      <div className="flex flex-1 flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl">
          <AnimatedText text={t.headline1} delay={0.2} />{" "}
          <AnimatedText text={t.headline2} delay={0.5} className="text-keyword" />
        </h2>

        <FadeUp delay={1.0} className="mt-8 flex items-center justify-center gap-12">
          <SplashMockup variant="before" t={t} />
          <div className="text-xl font-light text-white/30">→</div>
          <SplashMockup variant="after" t={t} />
        </FadeUp>
      </div>
    </VisualLayout>
  );
}

function SplashMockup({ variant, t }: { variant: "before" | "after"; t: { beforeLabel: string; beforeDesc: string; afterLabel: string; afterDesc: string; tagline: string; taglineSub: string; input: string; askText: string; askSub: string } }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-black" style={{ width: 250, height: 500 }}>
        <div className="flex items-center justify-between px-4 pt-3 pb-1.5 font-mono text-[9px] text-white/70">
          <span>22:59</span>
          <span className="inline-block h-1.5 w-3 rounded-sm bg-white/70" />
        </div>
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
          <span className="text-white/50 text-xs">←</span>
          <span className="text-[12px] font-medium tracking-wide text-white">MEXC-AI</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center px-3">
          {variant === "before" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/brand/current-mexc-ai.png"
              alt="Current MEXC-AI splash screen"
              className="w-full"
            />
          ) : (
            <>
              <XanthusMark size={60} />
              <div className="mt-5 text-center text-[12px] font-medium text-white">
                {t.askText}
              </div>
              <div className="mt-1 text-center text-[10px] text-white/40">
                {t.askSub}
              </div>
            </>
          )}
        </div>
        <div className="border-t border-white/5 px-3 py-2.5">
          <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
            <span className="flex-1 text-[10px] text-white/30">{t.input}</span>
            <span className="text-white/40 text-[10px]">●</span>
            <span className="text-white/40 text-[10px]">↑</span>
          </div>
        </div>
      </div>
      <div className="mt-3 font-mono text-[9px] tracking-[0.3em] text-white/45">
        {variant === "before" ? t.beforeLabel : t.afterLabel}
      </div>
      <div className="mt-0.5 text-[11px] text-white/35">
        {variant === "before" ? t.beforeDesc : t.afterDesc}
      </div>
    </div>
  );
}

