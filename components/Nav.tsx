import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { navLinks, site } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 rounded-md" aria-label={t("home")}>
          <span
            aria-hidden
            className="h-7 w-7 rounded-lg"
            style={{ background: "conic-gradient(from 180deg, var(--accent), var(--accent-2), var(--accent))" }}
          />
          <span className="text-[15px] font-semibold tracking-[-0.01em]">{site.name}</span>
        </Link>

        <nav aria-label={t("primary")} className="hidden md:block">
          <ul className="flex gap-7 text-sm text-dim">
            {navLinks.map((l) => (
              <li key={l.key}>
                <a href={l.href} className="rounded-sm transition-colors hover:text-ink">
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
