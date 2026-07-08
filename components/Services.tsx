"use client";

import {
  BarChart3,
  Megaphone,
  PenTool,
  Users,
  Wand2,
} from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const serviceIcons = [Wand2, PenTool, Megaphone, Users, BarChart3];

export default function Services() {
  const { dict } = useLanguage();

  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark dark:text-white sm:text-4xl">
            {dict.services.headingPart1}
            <span className="gradient-text">{dict.services.headingHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {dict.services.subheading}
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <FadeIn key={service.title} delay={(i % 3) * 0.1}>
                <div className="group h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-surface-dark dark:hover:shadow-soft-dark">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-brand-dark dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
