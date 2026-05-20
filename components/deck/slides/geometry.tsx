"use client";

import { motion } from "framer-motion";
import { BodyLayout } from "../layouts";
import { AnimatedText, FadeUp } from "../AnimatedText";
import { useT } from "../LanguageContext";

const PATH_TOP =
  "M73.9992 60.51L5.3792 19.34C0.699196 16.53 -1.4408 10.52 1.0492 5.63C2.8792 2.01 6.4892 0 10.2192 0C12.0092 0 13.8392 0.47 15.4792 1.46L74.0192 36.59L100.149 20.91C104.919 18.05 111.309 19.06 114.419 23.66C117.729 28.57 116.209 35.19 111.189 38.19L74.0092 60.51H73.9992Z";

const PATH_BOTTOM =
  "M74.0008 50.49L142.621 91.66C147.301 94.47 149.441 100.48 146.951 105.37C145.121 108.99 141.511 111 137.781 111C135.991 111 134.161 110.53 132.521 109.54L73.9808 74.41L47.8508 90.09C43.0808 92.95 36.6908 91.94 33.5808 87.34C30.2708 82.43 31.7908 75.81 36.8108 72.81L73.9908 50.49L74.0008 50.49Z";

const PATH_FULL =
  "M146.952 105.368C145.123 108.986 141.505 111 137.784 111C135.996 111 134.167 110.527 132.522 109.541L73.9794 74.4111L47.8531 90.095C43.0842 92.9522 36.6914 91.945 33.5874 87.3406C30.278 82.4278 31.7991 75.8089 36.8147 72.8078L65.6544 55.5L5.38498 19.3428C0.698271 16.5267 -1.43952 10.5244 1.04772 5.63222C2.87718 2.01444 6.49499 0 10.2156 0C12.0039 0 13.8334 0.472778 15.4778 1.45944L74.0206 36.5889L100.147 20.905C104.916 18.0478 111.309 19.055 114.413 23.6594C117.722 28.5722 116.201 35.1911 111.185 38.1922L82.3456 55.5L142.615 91.6572C147.302 94.4733 149.44 100.476 146.952 105.368Z";

export function GeometrySlide() {
  const t = useT({
    en: {
      number: "06",
      title: "THE GEOMETRY",
      headlinePart1: "Two strokes.",
      headlinePart2: "One intersection.",
      stroke1: { label: "STROKE 01", title: "Speed", desc: "Xanthus the divine horse, fastest steed in mythology." },
      stroke2: { label: "STROKE 02", title: "Precision", desc: "The prophecy delivered, one perfect line of counsel." },
      mark: { label: "THE MARK", title: "Xanthus", desc: "Two forces meeting. The brand emerges from the intersection." },
      conclusion: "The geometric translation of Xanthus speaking to Achilles at one decisive moment.",
    },
    zh: {
      number: "06",
      title: "几何结构",
      headlinePart1: "两笔交汇。",
      headlinePart2: "一个时刻。",
      stroke1: { label: "笔画 01", title: "速度", desc: "Xanthus 神马，神话中最迅捷的坐骑。" },
      stroke2: { label: "笔画 02", title: "精准", desc: "唯一一次预言，一句完美的建议。" },
      mark: { label: "完整标志", title: "Xanthus", desc: "两股力量相会，品牌由此诞生。" },
      conclusion: "Xanthus 向阿基里斯发声的几何化表达，两股力量在一个决定性的瞬间相遇。",
    },
  });

  return (
    <BodyLayout number={t.number} title={t.title}>
      <div className="flex flex-col items-center">
        <h2 className="max-w-4xl text-center text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl">
          <AnimatedText text={t.headlinePart1} delay={0.2} />{" "}
          <AnimatedText text={t.headlinePart2} delay={0.55} className="text-keyword" />
        </h2>

        <div className="mt-10 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-6 w-full max-w-5xl">
          <StrokePanel
            pathD={PATH_TOP}
            gradientId="geom-top"
            info={t.stroke1}
            delay={1.1}
            fromX={-15}
          />
          <Connector symbol="+" delay={1.4} />
          <StrokePanel
            pathD={PATH_BOTTOM}
            gradientId="geom-bottom"
            info={t.stroke2}
            delay={1.1}
            fromX={0}
          />
          <Connector symbol="=" delay={1.7} />
          <StrokePanel
            pathD={PATH_FULL}
            gradientId="geom-full"
            info={t.mark}
            delay={1.1}
            fromX={15}
          />
        </div>

        <FadeUp delay={2.0} className="mt-8 max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-white/90">{t.conclusion}</p>
        </FadeUp>
      </div>
    </BodyLayout>
  );
}

function Connector({ symbol, delay }: { symbol: string; delay: number }) {
  return (
    <motion.div
      className="text-3xl font-light text-white/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {symbol}
    </motion.div>
  );
}

function StrokePanel({
  pathD,
  gradientId,
  info,
  delay,
  fromX,
}: {
  pathD: string;
  gradientId: string;
  info: { label: string; title: string; desc: string };
  delay: number;
  fromX: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-md"
      initial={{ opacity: 0, x: fromX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay }}
    >
      <svg width="120" height="90" viewBox="0 0 148 111" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={gradientId} x1="74" y1="0" x2="74" y2="111" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFA319" />
            <stop offset="1" stopColor="#FF600A" />
          </linearGradient>
        </defs>
        <path d={pathD} fill={`url(#${gradientId})`} />
      </svg>
      <div className="mt-3 font-mono text-[9px] tracking-[0.3em] text-xanthus-flame-light">{info.label}</div>
      <div className="mt-1 text-sm font-medium text-white">{info.title}</div>
      <p className="mt-1 max-w-[180px] text-center text-[11px] leading-relaxed text-white/55">{info.desc}</p>
    </motion.div>
  );
}
