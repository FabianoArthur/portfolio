import { useTranslations } from "next-intl";
import { site } from "@/lib/site";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] px-6 py-8 text-[13px] text-dim md:flex-row md:px-16">
      <span>{t("copyright", { year: site.year, name: site.name })}</span>
      <span className="flex gap-4">
        <a
          href={site.socials.github}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-ink"
        >
          {t("github")}
        </a>
        <span aria-hidden>·</span>
        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-ink"
        >
          {t("linkedin")}
        </a>
      </span>
      <span className="italic">{t("tagline")}</span>
    </footer>
  );
}
