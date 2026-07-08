"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:px-10 sm:pt-24 lg:px-24 lg:pt-28">
      <ParticlesBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-brand-dark dark:text-white sm:text-5xl lg:text-6xl">
            {dict.hero.headlinePart1}
            <span className="gradient-text">{dict.hero.headlineHighlight}</span>
            {dict.hero.headlinePart2}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            {dict.hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-base font-medium text-white shadow-soft transition-transform hover:scale-105 active:scale-95"
            >
              {dict.hero.ctaPrimary}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 px-7 py-3.5 text-base font-medium text-brand-dark transition-colors hover:border-brand-blue hover:text-brand-blue dark:border-slate-700 dark:text-white dark:hover:border-brand-purple dark:hover:text-brand-purple"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span>{dict.hero.noContract}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span>{dict.hero.customStrategy}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative h-[380px] w-full max-w-md sm:h-[440px]">
            <div className="animate-blob absolute -top-6 left-6 h-64 w-64 rounded-full bg-brand-blue/30 blur-3xl dark:bg-brand-blue/20" />
            <div
              className="animate-blob absolute bottom-0 right-4 h-72 w-72 rounded-full bg-brand-purple/30 blur-3xl dark:bg-brand-purple/20"
              style={{ animationDelay: "2s" }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="GoatedSocials"
                className="h-[32rem] w-[32rem] max-w-none animate-float object-contain drop-shadow-2xl sm:h-[40rem] sm:w-[40rem]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
