import el from "@/locales/el.json";
import en from "@/locales/en.json";

export type Locale = "el" | "en";

export type Dictionary = typeof el;

export const dictionaries: Record<Locale, Dictionary> = { el, en };

export const defaultLocale: Locale = "el";
