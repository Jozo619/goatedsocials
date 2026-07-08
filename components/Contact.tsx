"use client";

import { FormEvent, useState } from "react";
import { Instagram, Send } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Contact() {
  const { dict } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl bg-brand-gradient px-6 py-16 sm:px-12 lg:px-16">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="text-white">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {dict.contact.heading}
                </h2>
                <p className="mt-4 max-w-md text-white/90">
                  {dict.contact.subheading}
                </p>

                <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/15 px-5 py-3 backdrop-blur">
                  <Instagram size={20} />
                  <div className="text-sm">
                    <p className="font-medium">{dict.contact.followInstagram}</p>
                    <a
                      href="https://www.instagram.com/goated.socials"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 underline-offset-2 hover:underline"
                    >
                      @goated.socials
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-soft dark:bg-surface-dark sm:p-8">
                {submitted ? (
                  <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white">
                      <Send size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-brand-dark dark:text-white">
                      {dict.contact.successTitle}
                    </h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">
                      {dict.contact.successMessage}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-brand-dark dark:text-slate-200"
                      >
                        {dict.contact.formName}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder={dict.contact.namePlaceholder}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-dark placeholder:text-slate-400 outline-none transition-colors focus:border-brand-blue dark:border-slate-700 dark:bg-base-dark dark:text-white dark:focus:border-brand-purple"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-brand-dark dark:text-slate-200"
                      >
                        {dict.contact.formEmail}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={dict.contact.emailPlaceholder}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-dark placeholder:text-slate-400 outline-none transition-colors focus:border-brand-blue dark:border-slate-700 dark:bg-base-dark dark:text-white dark:focus:border-brand-purple"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-brand-dark dark:text-slate-200"
                      >
                        {dict.contact.formMessage}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder={dict.contact.messagePlaceholder}
                        className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-dark placeholder:text-slate-400 outline-none transition-colors focus:border-brand-blue dark:border-slate-700 dark:bg-base-dark dark:text-white dark:focus:border-brand-purple"
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 text-base font-medium text-white shadow-soft transition-transform hover:scale-[1.02] active:scale-95"
                    >
                      {dict.contact.sendButton}
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
