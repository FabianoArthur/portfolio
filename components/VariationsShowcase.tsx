import { getLocale, getTranslations } from "next-intl/server";
import { Chip } from "./Chip";
import { Reveal } from "./Reveal";
import { ShowcaseCard, type CardTheme } from "./ShowcaseCard";

type Variation = {
  theme: CardTheme;
  href: string;
  key: "v3" | "v4" | "v5" | "v6";
  swatches: string[];
  memorable: number;
  decoration: React.ReactNode;
};

const decorationV3 = (
  <div
    aria-hidden
    className="absolute -bottom-16 -right-10 hidden sm:block"
    style={{
      width: 320,
      height: 200,
      borderLeft: "2px solid #ff4d1c",
      borderBottom: "2px solid #ff4d1c",
      transform: "rotate(22deg)",
    }}
  />
);

const decorationV5 = (
  <>
    <div
      aria-hidden
      className="absolute hidden sm:block"
      style={{
        right: 80,
        top: 100,
        width: 150,
        height: 150,
        borderRadius: "50%",
        background: "#ffd34e",
      }}
    />
    <div
      aria-hidden
      className="absolute hidden sm:block"
      style={{
        right: 180,
        bottom: 90,
        width: 110,
        height: 110,
        borderRadius: 22,
        background: "#ff5fa2",
        transform: "rotate(16deg)",
      }}
    />
    <div
      aria-hidden
      className="absolute hidden sm:block"
      style={{
        right: 60,
        bottom: 90,
        width: 120,
        height: 110,
        background: "#7a52f5",
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      }}
    />
  </>
);

const decorationV6 = (
  <div
    aria-hidden
    className="absolute hidden sm:block"
    style={{
      right: 56,
      top: "50%",
      transform: "translateY(-50%)",
      width: 220,
      height: 140,
      background: "#d4501e",
      borderRadius: 8,
      border: "4px double #3a1f0d",
      boxShadow: "6px 6px 0 #3a1f0d",
    }}
  />
);

function buildVariations(locale: string): Variation[] {
  return [
    {
      theme: "v3",
      href: "/brutalist",
      key: "v3",
      swatches: ["#000000", "#ff4d1c", "#fffd9c", "#7cff7c", "#e8e6df"],
      memorable: 3,
      decoration: decorationV3,
    },
    {
      theme: "v4",
      href: `/${locale}`,
      key: "v4",
      swatches: ["#0a0a0c", "#b48cff", "#6ad2ff", "#7cff9c", "#e8e6e3"],
      memorable: 2,
      decoration: null,
    },
    {
      theme: "v5",
      href: "/vibrant",
      key: "v5",
      swatches: ["#1c1410", "#ff5b1f", "#ffd34e", "#ff5fa2", "#7a52f5"],
      memorable: 3,
      decoration: decorationV5,
    },
    {
      theme: "v6",
      href: "/retro",
      key: "v6",
      swatches: ["#f0e5cf", "#d4501e", "#3a1f0d", "#2d6b6b", "#c79a2a"],
      memorable: 3,
      decoration: decorationV6,
    },
  ];
}

export async function VariationsShowcase() {
  const locale = await getLocale();
  const t = await getTranslations("variations");
  const variations = buildVariations(locale);
  const labels = {
    tone: t("labels.tone"),
    risk: t("labels.risk"),
    memorable: t("labels.memorable"),
  };

  return (
    <section id="work" className="px-6 py-10 md:px-16">
      <Reveal>
        <div className="mb-8 flex items-baseline justify-between gap-4 md:mb-10">
          <div>
            <Chip>{t("section.chip")}</Chip>
            <h3 className="mt-3 text-[28px] font-medium tracking-[-0.02em]">
              {t("section.title")}
            </h3>
          </div>
          <span className="whitespace-nowrap text-[13px] text-dim">
            {t("section.note")}
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {variations.map((v, i) => (
          <Reveal key={v.key} delay={i * 0.06}>
            <ShowcaseCard
              href={v.href}
              theme={v.theme}
              chipLabel={t(`${v.key}.chip`)}
              title={t(`${v.key}.title`)}
              description={t(`${v.key}.description`)}
              swatches={v.swatches}
              tone={t(`${v.key}.tone`)}
              risk={t(`${v.key}.risk`)}
              memorable={v.memorable}
              labels={labels}
              decoration={v.decoration}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
