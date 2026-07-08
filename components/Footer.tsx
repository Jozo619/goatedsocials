"use client";

import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/goated.socials",
  },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const { dict } = useLanguage();

  const quickLinks = [
    { label: dict.nav.services, href: "#services" },
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.work, href: "#work" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-slate-100 bg-white px-6 py-14 dark:border-slate-800 dark:bg-base-dark sm:px-10 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <a href="#" aria-label="GoatedSocials">
              <Logo />
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-600 dark:text-slate-400">
              {dict.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-white">
              {dict.footer.quickLinks}
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-purple"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-white">
              {dict.footer.followUs}
            </h4>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              {dict.footer.followUsDescription}
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-brand-blue hover:text-brand-blue dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-purple dark:hover:text-brand-purple"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 dark:border-slate-800 sm:flex-row">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} GoatedSocials. {dict.footer.rightsReserved}
          </p>
          <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500">
            <a href="#" className="hover:text-brand-blue dark:hover:text-brand-purple">
              {dict.footer.privacyPolicy}
            </a>
            <a href="#" className="hover:text-brand-blue dark:hover:text-brand-purple">
              {dict.footer.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
