export const site = {
  name: "Fabiano Arthur",
  alias: "Zhyorg",
  email: "fabianoarthur47@gmail.com",
  whatsappUrl: "https://wa.me/5561995898122",
  whatsappLabel: "+55 (61) 9 9589-8122",
  year: 2026,
  socials: {
    github: "https://github.com/FabianoArthur",
    linkedin:
      "https://www.linkedin.com/in/fabiano-arthur-p-c-de-oliveira-30bb39215/",
  },
} as const;

export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node",
  "Python",
  "Go",
  "Postgres",
  "Docker",
] as const;

export type NavKey = "work" | "about" | "contact";

export const navLinks: Array<{ key: NavKey; href: string }> = [
  { key: "work", href: "#work" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
];

export type ApproachTagKey = "typeSafe" | "tested" | "observable" | "documented";
export const approachTags: ApproachTagKey[] = [
  "typeSafe",
  "tested",
  "observable",
  "documented",
];

export type StatKey = "years" | "tech" | "coffees" | "goal";
export const stats: Array<{ key: StatKey; n: string }> = [
  { key: "years", n: "4" },
  { key: "tech", n: "12+" },
  { key: "coffees", n: "∞" },
  { key: "goal", n: "1" },
];

export type Locale = "pt" | "en" | "es" | "zh";

export const locales: Locale[] = ["pt", "en", "es", "zh"];
export const defaultLocale: Locale = "pt";

export const localeLabels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
  zh: "中",
};
