import Reveal from "./Reveal";
import ProjectCard, { type Project } from "./ProjectCard";
import Marquee from "./Marquee";

const PROJECTS: Project[] = [
  { n: "001", t: "TBD", sub: "project slot — open", bg: "#ff4d1c", color: "#000" },
  { n: "002", t: "TBD", sub: "project slot — open", bg: "#fffd9c", color: "#000" },
  { n: "003", t: "TBD", sub: "project slot — open", bg: "#7CFF7C", color: "#000" },
  { n: "004", t: "TBD", sub: "project slot — open", bg: "#000000", color: "#fff" },
  { n: "005", t: "TBD", sub: "project slot — open", bg: "#ffffff", color: "#000" },
  { n: "006", t: "TBD", sub: "project slot — open", bg: "#9cb8ff", color: "#000" },
];

export default function SelectedWork() {
  return (
    <>
      <section className="px-6 pb-6 pt-6 md:px-14">
        <Reveal>
          <h2
            className="my-3 text-[44px] uppercase leading-none tracking-[-0.02em] sm:text-[52px] md:text-[64px]"
            style={{
              fontFamily: "var(--font-archivo-black), Helvetica, sans-serif",
              fontWeight: 900,
            }}
          >
            &gt;&gt; SELECTED WORK &lt;&lt;
          </h2>
        </Reveal>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee
        duration={30}
        className="border-y-[3px] border-v3-ink bg-v3-orange py-[14px]"
      >
        <span
          className="pr-10 text-[28px] tracking-[-0.02em] sm:text-[32px] md:text-[36px]"
          style={{
            fontFamily: "var(--font-archivo-black), Helvetica, sans-serif",
            fontWeight: 900,
          }}
        >
          AVAILABLE FOR HIRE ★ AVAILABLE FOR HIRE ★ AVAILABLE FOR HIRE ★
        </span>
      </Marquee>
    </>
  );
}
