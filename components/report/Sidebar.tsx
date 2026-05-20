"use client";

import { useEffect, useState } from "react";
import { useT } from "@/components/deck/LanguageContext";

export interface Section {
  id: string;
  num: string;
  title: string;
}

export function ReportSidebar({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const t = useT({
    en: {
      back: "← BACK",
      eyebrow: "BRAND REPORT",
      title: "Xanthus",
      subtitle: "MEXC AI Brand Upgrade, 2026",
    },
    zh: {
      back: "← 返回",
      eyebrow: "品牌报告",
      title: "Xanthus",
      subtitle: "MEXC AI 品牌升级, 2026",
    },
  });

  useEffect(() => {
    const handler = () => {
      let current = sections[0]?.id ?? "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < 200) current = s.id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [sections]);

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-white/8 bg-black px-7 py-10 lg:block">
      <a
        href="/"
        className="block font-mono text-[10px] tracking-[0.3em] text-white/50 transition-colors hover:text-white"
      >
        {t.back}
      </a>

      <div className="mt-10">
        <div className="font-mono text-[10px] tracking-[0.3em] text-xanthus-flame-light">
          {t.eyebrow}
        </div>
        <h1 className="mt-2 text-2xl font-semibold leading-tight text-white">
          {t.title}
        </h1>
        <p className="mt-1 text-xs text-white/55">{t.subtitle}</p>
      </div>

      <nav className="mt-10 flex flex-col gap-0.5">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`group flex items-baseline gap-3 rounded-md px-2 py-1.5 text-[13px] transition-colors ${
                isActive
                  ? "bg-white/5 text-white"
                  : "text-white/55 hover:bg-white/[0.03] hover:text-white/85"
              }`}
            >
              <span
                className={`font-mono text-[10px] ${
                  isActive ? "text-xanthus-flame-light" : "text-white/35"
                }`}
              >
                {s.num}
              </span>
              <span>{s.title}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
