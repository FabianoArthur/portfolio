import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { stack } from "@/lib/site";

export function Stack() {
  const t = useTranslations("stack");
  return (
    <section className="px-6 pb-20 text-center md:px-16">
      <Reveal>
        <div className="mb-5 text-xs uppercase tracking-[0.15em] text-dim">
          {t("heading")}
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
          {stack.map((s) => (
            <span
              key={s}
              className="text-lg font-medium tracking-[-0.01em]"
            >
              {s}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
