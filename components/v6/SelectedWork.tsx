import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  { side: "SIDE A", num: "01", label: "In production", cassetteColor: "#d4501e" },
  { side: "SIDE A", num: "02", label: "Coming soon", cassetteColor: "#2d6b6b" },
  { side: "SIDE B", num: "03", label: "Open slot", cassetteColor: "#c79a2a" },
  { side: "SIDE B", num: "04", label: "Open slot", cassetteColor: "#8b3a0a" },
];

export default function SelectedWork() {
  return (
    <section id="works" className="px-6 py-10 md:px-14 md:py-12">
      <Reveal>
        <div
          className="mb-2 uppercase"
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: 18,
            letterSpacing: "0.04em",
          }}
        >
          ══════════ CATALOG / 1976 ══════════
        </div>
        <h2
          className="mb-7"
          style={{
            fontFamily: "var(--font-dm-serif), Georgia, serif",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            margin: "0 0 28px",
          }}
        >
          <span className="block text-[44px] sm:text-[60px] md:text-[80px]">
            Greatest Hits<span className="text-v6-orange">.</span>
          </span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.num} delay={0.05 * i}>
            <ProjectCard
              side={p.side}
              num={p.num}
              label={p.label}
              cassetteColor={p.cassetteColor}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
