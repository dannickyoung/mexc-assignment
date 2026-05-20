"use client";

import { ReactNode } from "react";
import { FadeUp } from "./AnimatedText";

/**
 * Three reusable layouts. Every slide picks one.
 *
 * All layouts accept optional `number` + `title` props which render as a
 * consistent section label, positioned absolutely at top-left of the slide.
 * Omit them for slides that should have no label.
 */

const SECTION_LABEL_POSITION = "absolute left-12 top-8";
const SECTION_LABEL_TYPO = "font-mono text-[11px] tracking-[0.3em] text-white/45";

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <FadeUp delay={0.05} className={SECTION_LABEL_POSITION}>
      <div className={SECTION_LABEL_TYPO}>
        {number} · {title}
      </div>
    </FadeUp>
  );
}

export function CoverLayout({
  number,
  title,
  children,
}: {
  number?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center px-20 py-20">
      {number && title && <SectionLabel number={number} title={title} />}
      <div className="w-full max-w-4xl text-center">{children}</div>
    </div>
  );
}

export function BodyLayout({
  number,
  title,
  children,
}: {
  number?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex h-full w-full flex-col justify-center px-20 py-20">
      {number && title && <SectionLabel number={number} title={title} />}
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

export function VisualLayout({
  number,
  title,
  children,
}: {
  number?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex h-full w-full flex-col px-14 py-16">
      {number && title && <SectionLabel number={number} title={title} />}
      <div className="mt-10 flex flex-1 flex-col">{children}</div>
    </div>
  );
}
