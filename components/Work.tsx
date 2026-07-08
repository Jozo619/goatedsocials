"use client";

import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Work() {
  const { dict } = useLanguage();

  return (
    <section id="work" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark dark:text-white sm:text-4xl">
            {dict.work.heading}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {dict.work.subheading}
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.work.projects.map((project, i) => (
            <FadeIn key={project.name} delay={(i % 3) * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-surface-dark dark:hover:shadow-soft-dark">
                <div className="relative h-44 w-full bg-brand-gradient-soft">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-2xl bg-brand-gradient opacity-80 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-brand-dark opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 dark:bg-black/40 dark:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-brand-blue dark:text-brand-purple">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-brand-dark dark:text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {project.result}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
