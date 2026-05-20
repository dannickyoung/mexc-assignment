"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "zh";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "zh" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/**
 * Convenience hook for accessing translated content.
 * Pass an object with `en` and `zh` keys, get back the active language's content.
 *
 *   const t = useT({ en: { title: "Hello" }, zh: { title: "你好" } });
 *   <h1>{t.title}</h1>
 */
export function useT<T>(content: { en: T; zh: T }): T {
  const { lang } = useLanguage();
  return content[lang];
}
