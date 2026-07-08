"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Navbar() {
  const { dict } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: dict.nav.services, href: "#services" },
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.work, href: "#work" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/80 backdrop-blur-lg dark:border-slate-800/80 dark:bg-base-dark/80"
          : "border-b border-transparent bg-white/60 backdrop-blur-lg dark:bg-base-dark/60"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-24">
        <a href="#" aria-label="GoatedSocials">
          <Logo variant="text" size="nav" />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-purple"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-transform hover:scale-105 active:scale-95"
          >
            {dict.nav.getStarted}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-brand-dark dark:border-slate-700 dark:text-slate-100"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 dark:border-slate-800 dark:bg-base-dark md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-600 dark:text-slate-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-full bg-brand-gradient px-5 py-3 text-center text-sm font-medium text-white shadow-soft"
            >
              {dict.nav.getStarted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
