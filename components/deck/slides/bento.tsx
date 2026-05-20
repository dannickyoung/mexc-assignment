"use client";

import { motion } from "framer-motion";
import { VisualLayout } from "../layouts";
import { XanthusMark } from "../XanthusMark";
import { XanthusWordmark } from "../XanthusWordmark";
import { useT } from "../LanguageContext";

/**
 * Pure visual slide: bento grid showing the Xanthus mark across color treatments,
 * compositions, and the brand cosmology (sunset over ocean).
 */
export function BentoSlide() {
  const t = useT({
    en: { number: "08", title: "THE SYSTEM" },
    zh: { number: "08", title: "品牌体系" },
  });

  return (
    <VisualLayout number={t.number} title={t.title}>
      <div className="flex flex-1 items-center justify-center">
        <div
          className="grid w-full max-w-4xl grid-cols-12 grid-rows-6 gap-2.5"
          style={{ aspectRatio: "16 / 9" }}
        >
          {/* Big hero — flame X on black, top-left */}
          <Cell
            delay={0.2}
            className="col-span-6 row-span-4 bg-black border border-white/10 flex items-center justify-center"
          >
            <XanthusMark size={130} />
          </Cell>

          {/* Inverted — black X on flame gradient */}
          <Cell delay={0.3} className="col-span-3 row-span-2 bg-flame-gradient flex items-center justify-center">
            <BlackMark size={50} />
          </Cell>

          {/* White X on MEXC blue */}
          <Cell delay={0.4} className="col-span-3 row-span-2 bg-mexc-blue-ribbon flex items-center justify-center">
            <WhiteMark size={50} />
          </Cell>

          {/* Wordmark on dark */}
          <Cell delay={0.5} className="col-span-3 row-span-2 bg-black border border-white/10 flex items-center justify-center">
            <XanthusWordmark width={110} fill="#FFFFFF" />
          </Cell>

          {/* Flame X on clean white */}
          <Cell
            delay={0.6}
            className="col-span-3 row-span-2 bg-white flex items-center justify-center"
          >
            <XanthusMark size={52} />
          </Cell>

          {/* Cosmology image cell - X-shaped light effect with the full logo centered */}
          <Cell
            delay={0.7}
            className="col-span-6 row-span-2 relative overflow-hidden border border-white/10 flex items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/cosmology.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative flex items-center gap-2.5">
              <WhiteMark size={36} />
              <XanthusWordmark width={115} fill="#FFFFFF" />
            </div>
          </Cell>

          {/* Sunset → Ocean gradient strip */}
          <Cell
            delay={0.8}
            className="col-span-6 row-span-2 rounded-3xl border border-white/10 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #FFA319 0%, #FF600A 45%, #1463FE 100%)",
            }}
          >
            <XanthusWordmark width={150} fill="#FFFFFF" />
          </Cell>
        </div>
      </div>
    </VisualLayout>
  );
}

function Cell({
  children,
  className = "",
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={`rounded-3xl ${className}`}
      style={style}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function BlackMark({ size = 70 }: { size?: number }) {
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
        fill="#000000"
      />
    </svg>
  );
}

function WhiteMark({ size = 70 }: { size?: number }) {
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
