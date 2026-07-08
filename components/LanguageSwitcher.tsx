"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Locale } from "@/lib/i18n/dictionary";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const otherLocale: Locale = locale === "el" ? "en" : "el";

  return (
    <button
      onClick={() => setLocale(otherLocale)}
      aria-label="Switch language"
      className="flex h-10 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 text-sm font-medium text-brand-dark transition-colors hover:border-brand-blue/40 hover:text-brand-blue dark:border-slate-700 dark:bg-surface-dark dark:text-slate-100 dark:hover:border-brand-purple/50 dark:hover:text-brand-purple"
    >
      <Globe size={16} />
      <span className={locale === "el" ? "font-bold" : "text-slate-400 dark:text-slate-500"}>
        EL
      </span>
      <span className="text-slate-300 dark:text-slate-600">/</span>
      <span className={locale === "en" ? "font-bold" : "text-slate-400 dark:text-slate-500"}>
        EN
      </span>
    </button>
  );
}
