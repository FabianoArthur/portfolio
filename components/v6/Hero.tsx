import Crt from "./Crt";
import Reveal from "./Reveal";
import { contact } from "@/lib/contact";

export default function Hero() {
  return (
    <section className="px-6 py-10 md:px-14 md:py-12">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-9">
        {/* LEFT */}
        <Reveal className="md:col-span-7">
          <div
            className="mb-3 uppercase"
            style={{
              fontFamily: "var(--font-vt323), monospace",
              fontSize: 16,
              letterSpacing: "0.04em",
            }}
          >
            ┌── PRESENTING ──────────────────┐
          </div>

          <h1
            className="text-v6-ink"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              margin: "0 0 8px",
            }}
          >
            <span className="block text-[56px] sm:text-[88px] md:text-[120px] lg:text-[156px]">
              Fabiano
            </span>
            <span
              className="block italic text-v6-orange text-[56px] sm:text-[88px] md:text-[120px] lg:text-[156px]"
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
              }}
            >
              Arthur
            </span>
          </h1>

          <div
            className="mt-2 uppercase"
            style={{
              fontFamily: "var(--font-vt323), monospace",
              fontSize: 16,
              letterSpacing: "0.04em",
            }}
          >
            └── EST. 2022 · A.K.A. &quot;ZHYORG&quot; ──┘
          </div>

          <p className="mt-7 max-w-[540px] text-[18px] leading-[1.4] md:text-[22px]">
            <span
              className="px-[6px] py-[2px]"
              style={{ background: "#c79a2a" }}
            >
              FULL-STACK DEVELOPER
            </span>{" "}
            baseado no Brasil. Construindo na web desde antes de você dizer
            &quot;framework&quot;.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="bg-v6-orange text-v6-cream no-underline"
              style={{
                fontFamily: "var(--font-vt323), monospace",
                fontSize: 20,
                letterSpacing: "0.06em",
                padding: "12px 20px",
                border: "3px double #3a1f0d",
              }}
            >
              ► PRESS START
            </a>
            <a
              href="#works"
              className="bg-transparent text-v6-ink no-underline"
              style={{
                fontFamily: "var(--font-vt323), monospace",
                fontSize: 20,
                letterSpacing: "0.06em",
                padding: "12px 20px",
                border: "3px double #3a1f0d",
              }}
            >
              ◆ VIEW WORKS
            </a>
          </div>
        </Reveal>

        {/* RIGHT — CRT */}
        <Reveal delay={0.1} className="md:col-span-5">
          <Crt />
        </Reveal>
      </div>
    </section>
  );
}
