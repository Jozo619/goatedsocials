"use client";

import { CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="section-padding bg-slate-50/60 dark:bg-white/[0.02]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <FadeIn>
          <span className="text-sm font-medium uppercase tracking-wider text-brand-blue dark:text-brand-purple">
            {dict.about.label}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-dark dark:text-white sm:text-4xl">
            {dict.about.heading}
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
            {dict.about.description}
          </p>

          <ul className="mt-8 space-y-4">
            {dict.about.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-brand-blue dark:text-brand-purple"
                  size={22}
                />
                <span className="text-slate-700 dark:text-slate-200">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2 rounded-2xl bg-brand-gradient p-8 text-white shadow-soft">
              <p className="text-4xl font-bold">{dict.about.statYears}</p>
              <p className="mt-2 text-sm text-white/90">
                {dict.about.statYearsLabel}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-surface-dark">
              <p className="text-2xl font-bold text-brand-dark dark:text-white">
                {dict.about.statRetention}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {dict.about.statRetentionLabel}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-surface-dark">
              <p className="text-2xl font-bold text-brand-dark dark:text-white">
                {dict.about.statIndustries}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {dict.about.statIndustriesLabel}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
