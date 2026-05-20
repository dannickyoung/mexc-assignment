"use client";

import { motion } from "framer-motion";
import { BodyLayout } from "../layouts";
import { AnimatedText, FadeUp } from "../AnimatedText";
import { useT } from "../LanguageContext";

export function NameSlide() {
  const t = useT({
    en: {
      number: "04",
      title: "THE NAME",
      pron: "Ξάνθος · pronounced [ZAN-thuhs]",
      caption: "The Golden One.",
      etymology: {
        label: "ETYMOLOGY",
        pre: "Ancient Greek for ",
        keyword: "golden",
        post: ". Homer's name for Achilles' immortal horse.",
      },
      role: {
        label: "ROLE",
        pre: "An advisor that speaks ",
        keyword: "precisely",
        post: ". Built for the crypto trader's edge.",
      },
      web3: {
        label: "WEB3 SIGNAL",
        pre: "The letter of ",
        keyword: "Web3",
        post: ". xAI, X-chain, dYdX. Crypto-native, instantly.",
      },
    },
    zh: {
      number: "04",
      title: "命名",
      pron: "Ξάνθος · 读作 [桑·修斯]",
      caption: "金色之名。",
      etymology: {
        label: "词源",
        pre: "古希腊语，意为 ",
        keyword: "金色",
        post: "。荷马以此命名阿基里斯的神马。",
      },
      role: {
        label: "角色",
        pre: "为交易者提供 ",
        keyword: "精准",
        post: " 的建议。专为加密交易者而生。",
      },
      web3: {
        label: "WEB3 信号",
        pre: "",
        keyword: "Web3",
        post: " 的字母。xAI、X-chain、dYdX。瞬间加密原生。",
      },
    },
  });

  return (
    <BodyLayout number={t.number} title={t.title}>
      <FadeUp delay={0.15}>
        <div className="text-sm text-white/45">
          <span className="italic">{t.pron}</span>
        </div>
      </FadeUp>

      <h1 className="mt-1 text-[5.5rem] font-bold leading-[1.0] tracking-[-0.04em] text-white md:text-[7rem] lg:text-[8rem]">
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        >
          XANTHUS
        </motion.span>
      </h1>

      <FadeUp delay={1.0} className="mt-1">
        <div className="text-keyword text-xl italic">{t.caption}</div>
      </FadeUp>

      <FadeUp delay={1.3} className="mt-10 grid max-w-5xl grid-cols-3 gap-5">
        {[t.etymology, t.role, t.web3].map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
          >
            <div className="font-mono text-[10px] tracking-[0.3em] text-xanthus-flame-light">
              {card.label}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              {card.pre}
              <span className="text-keyword-blue">{card.keyword}</span>
              {card.post}
            </p>
          </div>
        ))}
      </FadeUp>
    </BodyLayout>
  );
}
