import { useTranslations } from "next-intl";
import { Section } from "./Section";

const principles = ["tested", "documented", "secure"] as const;

export function About() {
  const t = useTranslations("about");

  return (
    <Section id="about" eyebrow={t("eyebrow")} title={t("title")}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div data-reveal className="space-y-5 text-lg leading-relaxed text-dim">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>
        <ul className="grid gap-3">
          {principles.map((key, i) => (
            <li
              key={key}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className="rounded-2xl border border-line bg-surface p-5"
            >
              <h3 className="font-semibold">{t(`principles.${key}.title`)}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-dim">{t(`principles.${key}.body`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
