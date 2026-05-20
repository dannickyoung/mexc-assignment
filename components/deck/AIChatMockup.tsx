"use client";

import { motion } from "framer-motion";
import { XanthusMarkState } from "./XanthusMarkState";
import { useT } from "./LanguageContext";

type State = "idle" | "generating" | "output";

interface AIChatMockupProps {
  state: State;
  scale?: number;
}

export function AIChatMockup({ state, scale = 1 }: AIChatMockupProps) {
  const t = useT({
    en: {
      header: "MEXC-AI",
      askTitle: "Ask Xanthus",
      suggestions: [
        "What's BTC doing today?",
        "Explain perpetual futures",
        "Top movers this hour",
      ],
      userMessage: "What's the BTC outlook for tonight?",
      thinking: "Xanthus is thinking",
      response:
        "BTC is consolidating around $97.2k. Open interest is climbing on funding-rate neutrality, a setup that historically resolves with a 3 to 5% directional move within 8 hours.",
      tag1: "↑ Bullish bias",
      tag2: "Conf. 68%",
      inputAsk: "Ask Xanthus…",
      inputStop: "Stop generating…",
    },
    zh: {
      header: "MEXC-AI",
      askTitle: "向 Xanthus 提问",
      suggestions: ["BTC 今天表现如何？", "解释永续合约", "本小时涨幅榜"],
      userMessage: "今晚 BTC 走势如何？",
      thinking: "Xanthus 思考中",
      response:
        "BTC 在 $97.2k 附近盘整。资金费率中性、未平仓量上升，历史上此类形态会在 8 小时内出现 3 至 5% 的方向性突破。",
      tag1: "↑ 看涨倾向",
      tag2: "信心度 68%",
      inputAsk: "向 Xanthus 提问…",
      inputStop: "停止生成…",
    },
  });

  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}>
      <div
        className="relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-black"
        style={{ width: 240, height: 480 }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 pt-2.5 pb-1.5 font-mono text-[9px] text-white/70">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="inline-block h-0.5 w-0.5 rounded-full bg-white/70" />
            <span className="inline-block h-0.5 w-0.5 rounded-full bg-white/70" />
            <span className="inline-block h-1 w-2.5 rounded-sm bg-white/70" />
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
          <span className="text-white/50 text-xs">←</span>
          <span className="text-[12px] font-medium tracking-wide text-white">{t.header}</span>
        </div>

        {/* Chat body */}
        <div className="flex flex-1 flex-col">
          {state === "idle" && <IdleBody t={t} />}
          {state === "generating" && <GeneratingBody t={t} />}
          {state === "output" && <OutputBody t={t} />}
        </div>

        {/* Input bar */}
        <div className="border-t border-white/5 px-3 py-2.5">
          <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
            <span className="flex-1 text-[10px] text-white/30">
              {state === "generating" ? t.inputStop : t.inputAsk}
            </span>
            <span className="text-white/40 text-[10px]">●</span>
            <span className="text-white/40 text-[10px]">↑</span>
          </div>
        </div>
      </div>
    </div>
  );
}

type Translations = {
  askTitle: string;
  suggestions: string[];
  userMessage: string;
  thinking: string;
  response: string;
  tag1: string;
  tag2: string;
};

function IdleBody({ t }: { t: Translations }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-5">
      <XanthusMarkState state="idle" size={56} />
      <div className="mt-5 text-center text-[12px] font-medium text-white">{t.askTitle}</div>

      <div className="mt-5 flex w-full flex-col gap-1.5">
        {t.suggestions.map((s, i) => (
          <div
            key={i}
            className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[10px] text-white/60"
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

function GeneratingBody({ t }: { t: Translations }) {
  return (
    <div className="flex flex-1 flex-col gap-2.5 px-4 py-4">
      <motion.div
        className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-mexc-blue-ribbon px-3 py-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-[10px] leading-relaxed text-white">{t.userMessage}</p>
      </motion.div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <XanthusMarkState state="generating" size={44} />
        <motion.div
          className="mt-3 text-center text-[10px] text-white/50"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          {t.thinking}
        </motion.div>
      </div>
    </div>
  );
}

function OutputBody({ t }: { t: Translations }) {
  return (
    <div className="flex flex-1 flex-col gap-2.5 px-4 py-4">
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-mexc-blue-ribbon px-3 py-2">
        <p className="text-[10px] leading-relaxed text-white">{t.userMessage}</p>
      </div>

      <motion.div
        className="flex max-w-[92%] items-start gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex-shrink-0 pt-0.5">
          <XanthusMarkState state="output" size={18} />
        </div>
        <div className="rounded-2xl rounded-tl-sm border border-white/8 bg-white/5 px-3 py-2">
          <p className="text-[10px] leading-relaxed text-white/90">{t.response}</p>
          <div className="mt-1.5 flex gap-1.5">
            <span className="rounded-full bg-white/5 px-1.5 py-0.5 text-[8px] text-white/50">
              {t.tag1}
            </span>
            <span className="rounded-full bg-white/5 px-1.5 py-0.5 text-[8px] text-white/50">
              {t.tag2}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
