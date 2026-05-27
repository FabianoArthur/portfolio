import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { navLinks, site } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav() {
  const t = useTranslations("nav");

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-16 md:py-5">
      <Link
        href="/"
        className="flex items-center gap-3"
        aria-label={t("ariaHome", { alias: site.alias })}
      >
        <span
          aria-hidden
          className="h-7 w-7 rounded-lg"
          style={{
            background: "conic-gradient(from 180deg, #b48cff, #6ad2ff, #b48cff)",
          }}
        />
        <span className="text-[15px] font-semibold tracking-[-0.01em]">
          {site.alias}
        </span>
      </Link>

      <nav className="hidden gap-7 text-sm text-dim md:flex">
        {navLinks.map((l) => (
          <a
            key={l.key}
            href={l.href}
            className="transition-colors hover:text-ink"
          >
            {t(l.key)}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs text-ink transition-colors hover:bg-white/[0.07]"
        >
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-green"
            style={{ boxShadow: "0 0 8px #7CFF9C" }}
          />
          {t("availableForHire")}
        </a>
      </div>
    </header>
  );
}
