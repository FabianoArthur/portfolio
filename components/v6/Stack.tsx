import Reveal from "./Reveal";

const STACK: ReadonlyArray<readonly [string, string]> = [
  ["TS", "TypeScript"],
  ["JS", "JavaScript"],
  ["PY", "Python"],
  ["GO", "Golang"],
  ["RB", "Ruby"],
  ["RS", "Rust"],
  ["RE", "React"],
  ["NX", "Next.js"],
  ["SV", "Svelte"],
  ["ND", "Node.js"],
  ["PG", "Postgres"],
  ["DK", "Docker"],
];

export default function Stack() {
  return (
    <section id="stack" className="px-6 py-10 md:px-14 md:py-12">
      <Reveal>
        <h2
          className="mb-5"
          style={{
            fontFamily: "var(--font-dm-serif), Georgia, serif",
            margin: "0 0 20px",
            lineHeight: 1,
          }}
        >
          <span className="block text-[36px] sm:text-[48px] md:text-[64px]">
            The Toolbox<span className="text-v6-orange">.</span>
          </span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {STACK.map(([code, name], i) => (
          <Reveal key={code} delay={0.03 * i}>
            <div
              className="flex flex-col items-center gap-[6px] bg-v6-paper"
              style={{
                border: "2px solid #3a1f0d",
                padding: 14,
              }}
            >
              <div
                className="flex items-center justify-center bg-v6-orange text-v6-cream"
                style={{
                  width: 56,
                  height: 56,
                  fontFamily: "var(--font-vt323), monospace",
                  fontSize: 28,
                  letterSpacing: "0.04em",
                  border: "2px solid #3a1f0d",
                }}
              >
                {code}
              </div>
              <div className="text-[14px] md:text-[16px]">{name}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
