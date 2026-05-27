import Reveal from "./Reveal";

const STACK: { label: string; bg: string; color: string }[] = [
  { label: "TYPESCRIPT", bg: "#9cb8ff", color: "#000" },
  { label: "REACT", bg: "#fffd9c", color: "#000" },
  { label: "NEXT.JS", bg: "#000000", color: "#fff" },
  { label: "SVELTE", bg: "#ff4d1c", color: "#000" },
  { label: "NODE.JS", bg: "#7cff7c", color: "#000" },
  { label: "PYTHON", bg: "#fffd9c", color: "#000" },
  { label: "GO", bg: "#9cb8ff", color: "#000" },
  { label: "RUST", bg: "#ff4d1c", color: "#000" },
  { label: "POSTGRES", bg: "#ffffff", color: "#000" },
  { label: "REDIS", bg: "#7cff7c", color: "#000" },
  { label: "DOCKER", bg: "#000000", color: "#fff" },
  { label: "LINUX", bg: "#fffd9c", color: "#000" },
];

export default function Stack() {
  return (
    <section className="px-6 py-8 md:px-14 md:py-10">
      <Reveal>
        <span className="inline-block bg-v3-ink px-2 py-[2px] text-[11px] tracking-[0.1em] text-v3-cream">
          &gt; ls skills/
        </span>
        <h2
          className="mt-3 text-[36px] uppercase leading-none tracking-[-0.02em] sm:text-[44px] md:text-[56px]"
          style={{
            fontFamily: "var(--font-archivo-black), Helvetica, sans-serif",
            fontWeight: 900,
          }}
        >
          THE STACK
        </h2>
      </Reveal>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {STACK.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.03}>
            <div
              className="border-[3px] border-v3-ink p-3 text-center text-[13px] tracking-[0.08em] shadow-[4px_4px_0_#000]"
              style={{
                background: s.bg,
                color: s.color,
                fontFamily:
                  "var(--font-ibm-plex-mono), var(--font-jetbrains-mono), ui-monospace, monospace",
                fontWeight: 600,
              }}
            >
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
