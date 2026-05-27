import { useTranslations } from "next-intl";
import { Chip } from "./Chip";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="px-6 py-24 text-center md:px-16 md:py-[100px]">
      <Reveal>
        <Chip>{t("chip")}</Chip>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="my-6 font-serif text-[56px] font-normal leading-[1] tracking-[-0.04em] sm:text-[72px] md:text-[96px]">
          {t("h2Line1")}
          <br />
          <span className="italic text-purple">{t("h2Line2")}</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto mb-8 max-w-[520px] text-base text-dim md:text-lg">
          {t("body")}
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2.5 rounded-[10px] px-5 py-3.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(180deg, #f6f4ef 0%, #d6d2c8 100%)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,.4), 0 12px 30px -10px rgba(255,255,255,.2)",
            }}
          >
            <span aria-hidden>✉</span> {site.email}
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-[10px] px-5 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{
              background: "rgba(37,211,102,.12)",
              border: "1px solid rgba(37,211,102,.35)",
              color: "#9aefb5",
            }}
          >
            <span
              aria-hidden
              className="h-2 w-2 rounded-full"
              style={{ background: "#25D366", boxShadow: "0 0 10px #25D366" }}
            />
            {t("whatsapp")}
          </a>
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-5 font-mono text-xs text-dim">
          {t("schedule", { phone: site.whatsappLabel })}
        </div>
      </Reveal>
    </section>
  );
}
