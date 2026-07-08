"use client";

import { Star } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Testimonials() {
  const { dict } = useLanguage();

  return (
    <section className="section-padding bg-slate-50/60 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark dark:text-white sm:text-4xl">
            {dict.testimonials.heading}
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {dict.testimonials.items.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-surface-dark">
                <div className="flex gap-1 text-brand-purple">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-slate-700 dark:text-slate-200">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-11 w-11 shrink-0 rounded-full bg-brand-gradient" />
                  <div>
                    <p className="text-sm font-bold text-brand-dark dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
