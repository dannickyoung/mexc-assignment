"use client";

import { CoverLayout } from "../layouts";
import { FadeUp } from "../AnimatedText";
import { XanthusMark } from "../XanthusMark";
import { XanthusWordmark } from "../XanthusWordmark";
import { MexcLogo } from "../MexcLogo";
import { useT } from "../LanguageContext";

export function LaunchSlide() {
  const t = useT({
    en: {
      overline: "LAUNCH",
      launches: "launches",
      tagline: "The premium AI advisor every crypto trader deserves.",
    },
    zh: {
      overline: "正式发布",
      launches: "发布",
      tagline: "每位加密交易者都应有的高端 AI 智者。",
    },
  });

  return (
    <CoverLayout>
      <div className="flex flex-col items-center">
        {/* Overline */}
        <FadeUp delay={0.1}>
          <div className="font-mono text-[10px] tracking-[0.4em] text-xanthus-flame-light">
            {t.overline}
          </div>
        </FadeUp>

        {/* MEXC logo + "launches" */}
        <FadeUp delay={0.35} className="mt-10 flex items-center gap-5">
          <MexcLogo width={130} />
          <span className="text-base font-light italic tracking-wider text-white/65">
            {t.launches}
          </span>
        </FadeUp>

        {/* Full Xanthus lockup - inside a glassmorphism card, large */}
        <FadeUp delay={0.75} className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 px-14 py-10 backdrop-blur-md">
            <div className="flex items-center gap-7">
              <XanthusMark size={160} />
              <XanthusWordmark width={460} fill="#FFFFFF" />
            </div>
          </div>
        </FadeUp>

        {/* Tagline */}
        <FadeUp delay={1.6} className="mt-10 max-w-md">
          <p className="text-center text-sm italic text-white/65 md:text-base">
            {t.tagline}
          </p>
        </FadeUp>

        {/* Brand report link */}
        <FadeUp delay={2.1} className="mt-10">
          <a
            href="/report"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-[11px] tracking-[0.25em] text-white/70 backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            VIEW BRAND REPORT
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </FadeUp>
      </div>
    </CoverLayout>
  );
}
