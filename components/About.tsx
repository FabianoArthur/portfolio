import { useTranslations } from "next-intl";
import { Chip } from "./Chip";
import { Reveal } from "./Reveal";
import { approachTags } from "@/lib/site";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="px-6 py-10 md:px-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <article className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.025] to-white/[0.005]">
            <div className="relative z-10 p-7">
              <Chip>{t("card1.chip")}</Chip>
              <h3 className="mt-4 mb-3 font-serif text-4xl font-normal italic tracking-[-0.02em] md:text-[44px]">
                {t("card1.title")}
              </h3>
              <p className="max-w-[460px] text-[15px] leading-[1.55] text-dim">
                {t("card1.body")}
              </p>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -bottom-20 h-[360px] w-[360px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(180,140,255,.5), transparent 60%)",
                filter: "blur(20px)",
              }}
            />
            <span className="absolute right-5 top-5 font-mono text-[11px] text-dim">
              {t("card1.fig")}
            </span>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.025] to-white/[0.005] p-6">
            <div>
              <Chip>{t("card2.chip")}</Chip>
              <h3 className="mt-3.5 mb-2 text-[22px] font-medium tracking-[-0.01em]">
                {t("card2.title")}
              </h3>
              <p className="text-sm leading-[1.55] text-dim">
                {t("card2.body")}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {approachTags.map((tag) => (
                <Chip key={tag}>{t(`tags.${tag}`)}</Chip>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
