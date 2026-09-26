import { useTranslations } from "next-intl";
import { stack } from "@/lib/site";
import { Section } from "./Section";

export function Stack() {
  const t = useTranslations("stack");

  return (
    <Section id="stack" eyebrow={t("eyebrow")} title={t("title")}>
      <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {stack.map(({ group, items }, i) => (
          <div
            key={group}
            data-reveal
            style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
            className="bg-bg p-5"
          >
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{t(`groups.${group}`)}</dt>
            <dd className="mt-3">
              <ul className="space-y-1.5 text-[15px]">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
