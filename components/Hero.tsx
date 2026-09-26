import { useTranslations } from "next-intl";
import { ArrowUpRightIcon } from "./Icons";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section aria-labelledby="hero-title" className="mx-auto w-full max-w-6xl px-4 pb-20 pt-20 sm:px-6 md:pb-28 md:pt-32">
      <p data-reveal className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-dim">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ok" />
        {t("eyebrow")}
      </p>

      <h1
        id="hero-title"
        data-reveal
        style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
        className="mt-7 max-w-4xl font-serif text-[3.25rem] leading-[0.98] tracking-[-0.035em] sm:text-7xl md:text-8xl"
      >
        {t("titleLine1")}{" "}
        <span className="text-gradient italic">{t("titleLine2")}</span>
      </h1>

      <p
        data-reveal
        style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        className="mt-8 max-w-2xl text-lg leading-relaxed text-dim md:text-xl"
      >
        {t.rich("body", { name: (chunks) => <strong className="font-medium text-ink">{chunks}</strong> })}
      </p>

      <div
        data-reveal
        style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
        className="mt-10 flex flex-wrap gap-3"
      >
        <a
          href="#work"
          className="inline-flex h-12 items-center gap-2 rounded-xl bg-ink px-5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
        >
          {t("ctaPrimary")}
          <span aria-hidden>→</span>
        </a>
        <a
          href="#contact"
          className="inline-flex h-12 items-center gap-2 rounded-xl border border-line-strong bg-surface px-5 text-sm font-medium transition-colors hover:bg-surface-hover"
        >
          {t("ctaSecondary")}
          <ArrowUpRightIcon />
        </a>
      </div>
    </section>
  );
}
