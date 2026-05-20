"use client";

import { BodyLayout } from "../layouts";
import { AnimatedText, FadeUp } from "../AnimatedText";
import { XanthusMark } from "../XanthusMark";
import { MexcMark } from "../MexcLogo";
import { useT } from "../LanguageContext";

export function ColorSlide() {
  const t = useT({
    en: {
      number: "07",
      title: "THE COLOR",
      headline1: "Flame,",
      headline2: "not gold.",
      subhead: "Crypto AI is all cool. Xanthus is the warm.",
      mexc: {
        label: "MEXC · BLUE RIBBON",
        hex: "#1463FE",
        title: "The platform.",
        body: "The depth. The ocean. The trust.",
      },
      xanthus: {
        label: "XANTHUS · FLAME",
        hex: "#FF600A → #FFA319",
        title: "The spark.",
        body: "The signal. The counsel. The fire.",
      },
      tagline: "Two colors. One cosmology, sunset over ocean.",
    },
    zh: {
      number: "07",
      title: "色彩系统",
      headline1: "火光，",
      headline2: "而非黄金。",
      subhead: "加密 AI 都很冷。Xanthus 是其中的暖。",
      mexc: {
        label: "MEXC · BLUE RIBBON",
        hex: "#1463FE",
        title: "平台。",
        body: "深度。海洋。MEXC 用户的信任所在。",
      },
      xanthus: {
        label: "XANTHUS · FLAME",
        hex: "#FF600A → #FFA319",
        title: "火花。",
        body: "信号。智者。加密 AI 里少见，瞬间显眼。",
      },
      tagline: "两种颜色，一个宇宙：日落之于海洋。",
    },
  });

  return (
    <BodyLayout number={t.number} title={t.title}>
      <div className="flex flex-col items-center">
        {/* Headline */}
        <h2 className="text-center text-4xl font-semibold leading-[1.0] tracking-tight text-white md:text-5xl">
          <AnimatedText text={t.headline1} delay={0.2} />{" "}
          <AnimatedText
            text={t.headline2}
            delay={0.45}
            className="text-keyword"
          />
        </h2>

        {/* Subhead */}
        <FadeUp delay={1.0} className="mt-4">
          <p className="text-base text-white/90 md:text-lg">{t.subhead}</p>
        </FadeUp>

        {/* Two hero color blocks side by side */}
        <FadeUp
          delay={1.3}
          className="mt-10 grid w-full max-w-5xl grid-cols-2 gap-4"
        >
          {/* MEXC Blue block - white bg with blue mark, dark text */}
          <div
            className="relative overflow-hidden rounded-3xl bg-white p-7"
            style={{ minHeight: 240 }}
          >
            <div className="flex h-full flex-col justify-between">
              <MexcMark size={48} />
              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                  {t.mexc.label} · {t.mexc.hex}
                </div>
                <div className="mt-2 text-2xl font-semibold text-zinc-900">
                  {t.mexc.title}
                </div>
                <p className="mt-1.5 max-w-xs text-sm text-zinc-700">
                  {t.mexc.body}
                </p>
              </div>
            </div>
          </div>

          {/* Xanthus Flame block - white bg with flame mark, dark text */}
          <div
            className="relative overflow-hidden rounded-3xl bg-white p-7"
            style={{ minHeight: 240 }}
          >
            <div className="flex h-full flex-col justify-between">
              <XanthusMark size={48} />
              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                  {t.xanthus.label} · {t.xanthus.hex}
                </div>
                <div className="mt-2 text-2xl font-semibold text-zinc-900">
                  {t.xanthus.title}
                </div>
                <p className="mt-1.5 max-w-xs text-sm text-zinc-700">
                  {t.xanthus.body}
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Tagline */}
        <FadeUp delay={1.9} className="mt-6">
          <div className="font-mono text-[11px] italic tracking-wide text-white/50">
            {t.tagline}
          </div>
        </FadeUp>
      </div>
    </BodyLayout>
  );
}

/** White X mark for use on the flame gradient background. */
function XanthusMarkInverted({ size = 50 }: { size?: number }) {
  const aspectRatio = 148 / 111;
  return (
    <svg
      width={size * aspectRatio}
      height={size}
      viewBox="0 0 148 111"
      fill="none"
    >
      <path
        d="M146.952 105.368C145.123 108.986 141.505 111 137.784 111C135.996 111 134.167 110.527 132.522 109.541L73.9794 74.4111L47.8531 90.095C43.0842 92.9522 36.6914 91.945 33.5874 87.3406C30.278 82.4278 31.7991 75.8089 36.8147 72.8078L65.6544 55.5L5.38498 19.3428C0.698271 16.5267 -1.43952 10.5244 1.04772 5.63222C2.87718 2.01444 6.49499 0 10.2156 0C12.0039 0 13.8334 0.472778 15.4778 1.45944L74.0206 36.5889L100.147 20.905C104.916 18.0478 111.309 19.055 114.413 23.6594C117.722 28.5722 116.201 35.1911 111.185 38.1922L82.3456 55.5L142.615 91.6572C147.302 94.4733 149.44 100.476 146.952 105.368Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Suppress unused-import lint (XanthusMark imported but only one branch uses it)
void XanthusMark;
