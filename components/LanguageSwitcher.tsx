import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { htmlLang, localeLabels, locales, type Locale } from "@/lib/locale";

const languageNames: Record<Locale, string> = { en: "English", pt: "Português" };

/** Plain links (not buttons): each language is its own static page. */
export function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const current = useLocale() as Locale;

  return (
    <nav aria-label={t("label")}>
      <ul className="flex items-center gap-0.5 rounded-full border border-line bg-surface p-1 text-xs font-medium">
        {locales.map((l) => {
          const active = l === current;
          return (
            <li key={l}>
              <Link
                href="/"
                locale={l}
                hrefLang={htmlLang[l]}
                lang={htmlLang[l]}
                aria-current={active ? "page" : undefined}
                aria-label={`${localeLabels[l]} — ${active ? languageNames[l] : t("switchTo", { language: languageNames[l] })}`}
                className={`inline-flex h-7 min-w-9 items-center justify-center rounded-full px-2 transition-colors ${
                  active ? "bg-ink text-bg" : "text-dim hover:text-ink"
                }`}
              >
                {localeLabels[l]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
