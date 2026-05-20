"use client";

import { VisualLayout } from "../layouts";
import { AnimatedText, FadeUp } from "../AnimatedText";
import { AIChatMockup } from "../AIChatMockup";
import { useT } from "../LanguageContext";

export function IPStatesSlide() {
  const t = useT({
    en: {
      number: "09",
      title: "THE IP CHARACTER",
      headline1: "Three states.",
      headline2: "One mark.",
      states: [
        { num: "01", label: "IDLE", desc: "The mark breathing, alive, attentive." },
        { num: "02", label: "GENERATING", desc: "Two strokes parting and rejoining, counsel forming." },
        { num: "03", label: "OUTPUT", desc: "A decisive pulse outward, the answer delivered." },
      ],
    },
    zh: {
      number: "09",
      title: "IP 形象",
      headline1: "三种状态。",
      headline2: "同一标志。",
      states: [
        { num: "01", label: "待机", desc: "Logo 呼吸感强，沉静而专注。" },
        { num: "02", label: "生成中", desc: "两笔分离再合，思考凝聚成形。" },
        { num: "03", label: "结果输出", desc: "向外的一次脉动，回应已至。" },
      ],
    },
  });

  return (
    <VisualLayout number={t.number} title={t.title}>
      <div className="flex flex-1 flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold leading-[1.1] tracking-tight text-white md:text-3xl">
          <AnimatedText text={t.headline1} delay={0.2} />{" "}
          <AnimatedText text={t.headline2} delay={0.5} className="text-keyword" />
        </h2>

        <FadeUp delay={1.0} className="mt-6 flex items-start justify-center gap-6">
          {t.states.map((s, idx) => (
            <div key={s.num} className="flex flex-col items-center">
              <AIChatMockup
                state={idx === 0 ? "idle" : idx === 1 ? "generating" : "output"}
              />
              <div className="mt-3 flex flex-col items-center">
                <div className="font-mono text-[9px] tracking-[0.3em] text-xanthus-flame-light">
                  {s.num}
                </div>
                <div className="mt-1 text-xs font-medium tracking-wide text-white">
                  {s.label}
                </div>
                <p className="mt-1 max-w-[200px] text-center text-[10px] leading-relaxed text-white/55">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </FadeUp>
      </div>
    </VisualLayout>
  );
}
