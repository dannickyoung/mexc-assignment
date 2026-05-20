"use client";

import { BodyLayout } from "../layouts";
import { AnimatedText, FadeUp } from "../AnimatedText";
import { useT } from "../LanguageContext";

export function ProblemSlide() {
  const t = useT({
    en: {
      number: "01",
      title: "THE OPPORTUNITY",
      headlinePart1: "MEXC's AI isn't weak.",
      headlinePart2: "Now make it iconic.",
      pillars: [
        { label: "01", title: "A Web3-native identity", body: "An AI mark as crypto-native as the platform." },
        { label: "02", title: "A single coherent IP", body: "One character, one voice, on every surface." },
        { label: "03", title: "Premium international polish", body: "A brand built for the global stage." },
      ],
    },
    zh: {
      number: "01",
      title: "升级机会",
      headlinePart1: "MEXC 的 AI 并不弱。",
      headlinePart2: "让它成为标杆。",
      pillars: [
        { label: "01", title: "Web3 原生身份", body: "让 AI 标志与平台同样加密原生。" },
        { label: "02", title: "完整的 IP 体系", body: "一个角色，一种语言，贯穿全界面。" },
        { label: "03", title: "国际化高端感", body: "为全球舞台打造的品牌。" },
      ],
    },
  });

  return (
    <BodyLayout number={t.number} title={t.title}>
      <h2 className="max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight text-white md:text-5xl">
        <AnimatedText text={t.headlinePart1} delay={0.2} />
        <br />
        <AnimatedText text={t.headlinePart2} delay={0.5} className="text-keyword" />
      </h2>

      <FadeUp delay={1.1} className="mt-12 grid max-w-5xl grid-cols-3 gap-5">
        {t.pillars.map((p) => (
          <div
            key={p.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
          >
            <div className="font-mono text-[10px] tracking-[0.25em] text-xanthus-flame-light">{p.label}</div>
            <div className="mt-3 text-base font-medium leading-snug text-white">{p.title}</div>
            <p className="mt-2 text-[13px] leading-relaxed text-white/90">{p.body}</p>
          </div>
        ))}
      </FadeUp>
    </BodyLayout>
  );
}
