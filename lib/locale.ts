export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** BCP 47 tag for `<html lang>` and hreflang. */
export const htmlLang: Record<Locale, string> = { en: "en", pt: "pt-BR" };
export const ogLocale: Record<Locale, string> = { en: "en_US", pt: "pt_BR" };
export const localeLabels: Record<Locale, string> = { en: "EN", pt: "PT" };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** First supported language in the visitor's preference list, else the default. */
export function pickLocale(preferred: readonly string[] | undefined): Locale {
  for (const tag of preferred ?? []) {
    const primary = tag.toLowerCase().split("-")[0];
    if (isLocale(primary)) return primary;
  }
  return defaultLocale;
}

/** Inline script for the root page: same rule as `pickLocale`, then redirect. */
export function localeRedirectScript(basePath: string): string {
  const json = (v: unknown) => JSON.stringify(v).replace(/</g, "\\u003c");
  return `(function(){var L=${json(locales)},b=${json(basePath)},p=navigator.languages||(navigator.language?[navigator.language]:[]),c=${json(defaultLocale)};for(var i=0;i<p.length;i++){var t=String(p[i]).toLowerCase().split("-")[0];if(L.indexOf(t)>-1){c=t;break}}location.replace(b+"/"+c+"/")})()`;
}
