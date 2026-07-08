"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Stats() {
  const { dict } = useLanguage();

  return (
    <section className="border-y border-slate-100 bg-slate-50/60 px-6 py-14 dark:border-slate-800 dark:bg-white/[0.02] sm:px-10 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
        {dict.stats.items.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
            <p className="gradient-text text-3xl font-bold sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              {stat.label}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
