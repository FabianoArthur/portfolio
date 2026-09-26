import { useTranslations } from "next-intl";

export function SkipLink() {
  const t = useTranslations("a11y");
  return (
    <a
      href="#content"
      className="sr-only z-50 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      {t("skipToContent")}
    </a>
  );
}
