import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { stats } from "@/lib/site";

export function Stats() {
  const t = useTranslations("stats");

  return (
    <section className="px-6 py-10 md:px-16">
      <Reveal>
        <div className="grid grid-cols-2 rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.025] to-white/[0.005] md:grid-cols-4">
          {stats.map((stat, i) => {
            const mobileRightBorder =
              i % 2 === 0 ? "border-r border-white/[0.06]" : "";
            const mobileBottomBorder = i < 2 ? "border-b border-white/[0.06]" : "";
            const desktopRightBorder =
              i < 3 ? "md:border-r md:border-white/[0.06]" : "";
            const desktopResetBottom = i < 2 ? "md:border-b-0" : "";
            return (
              <div
                key={stat.key}
                className={`px-6 py-9 text-center ${mobileRightBorder} ${mobileBottomBorder} ${desktopRightBorder} ${desktopResetBottom}`}
              >
                <div
                  className="font-serif text-[56px] italic leading-none tracking-[-0.03em]"
                  style={{
                    backgroundImage: "linear-gradient(180deg, #fff, #888)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  {stat.n}
                </div>
                <div className="mt-2.5 text-[13px] text-dim">{t(stat.key)}</div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
