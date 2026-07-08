"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-700" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-dark transition-colors hover:border-brand-blue/40 hover:text-brand-blue dark:border-slate-700 dark:bg-surface-dark dark:text-slate-100 dark:hover:border-brand-purple/50 dark:hover:text-brand-purple"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
