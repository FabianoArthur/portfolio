"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeLabels, type Locale } from "@/lib/site";

export function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const current = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === current) return;
    startTransition(() => {
      const search = typeof window !== "undefined" ? window.location.search : "";
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      router.replace(`${pathname}${search}${hash}`, { locale: next });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("ariaLabel")}
      className={`inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.04] px-1 py-1 text-[11px] tracking-wide ${
        isPending ? "opacity-60" : ""
      }`}
    >
      {locales.map((l) => {
        const active = l === current;
        return (
          <button
            key={l}
            type="button"
            onClick={() => switchTo(l)}
            aria-pressed={active}
            className={`rounded-full px-2 py-1 transition-colors ${
              active
                ? "bg-white/[0.08] text-ink"
                : "text-dim hover:text-ink"
            }`}
          >
            {localeLabels[l]}
          </button>
        );
      })}
    </div>
  );
}
