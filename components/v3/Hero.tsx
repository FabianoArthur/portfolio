import Reveal from "./Reveal";
import { contact } from "@/lib/contact";

export default function Hero() {
  return (
    <section className="pb-8 pt-8 md:pb-10 md:pt-10">
      <div className="grid grid-cols-1 gap-8 px-6 md:grid-cols-12 md:px-14">
        {/* LEFT — big name */}
        <Reveal className="md:col-span-7">
          <span className="inline-block bg-v3-ink px-2 py-[2px] text-[11px] tracking-[0.06em] text-v3-cream">
            I AM
          </span>
          <h1
            className="mt-4 uppercase leading-[0.9] tracking-[-0.04em] text-v3-ink"
            style={{
              fontFamily: "var(--font-archivo-black), Helvetica, sans-serif",
              fontWeight: 900,
            }}
          >
            <span className="block text-[64px] sm:text-[88px] md:text-[112px] lg:text-[152px]">
              FABI
            </span>
            <span className="block text-[64px] sm:text-[88px] md:text-[112px] lg:text-[152px]">
              ANO
            </span>
            <span className="block text-[64px] sm:text-[88px] md:text-[112px] lg:text-[152px]">
              <span className="inline-block -rotate-2 bg-v3-orange px-3 py-0 text-v3-ink">
                ARTHUR
              </span>
            </span>
          </h1>
          <div className="mt-5 text-[16px] md:text-[18px]">
            &gt; also known as{" "}
            <span className="bg-v3-ink px-[6px] py-[2px] text-v3-cream">
              {contact.alias.toLowerCase()}
            </span>
          </div>
        </Reveal>

        {/* RIGHT — three info boxes */}
        <div className="flex flex-col gap-4 md:col-span-5">
          <Reveal delay={0.05}>
            <div className="border-[3px] border-v3-ink bg-white p-[18px] shadow-[6px_6px_0_#000]">
              <span className="inline-block bg-v3-ink px-2 py-[2px] text-[11px] tracking-[0.06em] text-v3-cream">
                WHAT
              </span>
              <p className="mt-3 text-[16px] leading-snug">
                full-stack developer.
                <br />
                code as material,
                <br />
                constraint as feature.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-[3px] border-v3-ink bg-v3-yellow p-[18px] shadow-[6px_6px_0_#000]">
              <span className="inline-block bg-v3-ink px-2 py-[2px] text-[11px] tracking-[0.06em] text-v3-cream">
                WHERE
              </span>
              <p className="mt-3 text-[16px]">Brasil 🇧🇷 / remote / globe</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border-[3px] border-v3-ink bg-v3-ink p-[18px] text-v3-cream shadow-[6px_6px_0_#000]">
              <span className="inline-block bg-v3-cream px-2 py-[2px] text-[11px] tracking-[0.06em] text-v3-ink">
                STATUS
              </span>
              <p className="mt-3 text-[16px]">
                <span className="text-v3-green">●</span> AVAILABLE FROM JUN 2026
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ASCII DIVIDER */}
      <div className="mt-10 overflow-hidden whitespace-nowrap border-y-[2px] border-v3-ink bg-v3-ink px-6 py-2 text-[14px] text-v3-cream">
        {"/".repeat(200)}
      </div>
    </section>
  );
}
