import { useTranslations } from "next-intl";
import { Chip } from "./Chip";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="px-6 pb-24 pt-20 text-center md:px-16 md:pb-[100px] md:pt-[120px]">
      <Reveal>
        <Chip>{t("chip", { year: site.year })}</Chip>
      </Reveal>

      <Reveal delay={0.05}>
        <h1 className="mt-7 font-serif text-[64px] font-normal leading-[1] tracking-[-0.04em] sm:text-[88px] md:text-[112px] lg:text-[136px]">
          {t("h1Line1")}
          <br />
          <span
            className="italic"
            style={{
              backgroundImage: "linear-gradient(180deg, #fff 0%, #b48cff 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            {t("h1Line2")}
          </span>
        </h1>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mx-auto mt-8 max-w-[620px] text-lg leading-[1.5] text-dim md:text-xl">
          {t.rich("body", {
            name: (chunks) => <span className="text-ink">{chunks}</span>,
          })}
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-[10px] px-5 py-3.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(180deg, #f6f4ef 0%, #d6d2c8 100%)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,.4), 0 12px 30px -10px rgba(255,255,255,.2)",
            }}
          >
            {t("ctaPrimary")} <span aria-hidden>→</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2.5 rounded-[10px] border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-white/[0.07]"
          >
            {t("ctaSecondary")}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
