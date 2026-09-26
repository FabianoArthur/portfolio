import { useTranslations } from "next-intl";
import { site } from "@/lib/site";

export function Footer() {
  const t = useTranslations("footer");
  const tA11y = useTranslations("a11y");

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-dim sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        <a
          href={site.source}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink"
        >
          {t("source")}
          <span className="sr-only"> {tA11y("externalLink")}</span>
        </a>
      </div>
    </footer>
  );
}
