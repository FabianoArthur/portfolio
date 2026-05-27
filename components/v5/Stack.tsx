import Reveal from "./Reveal";

const COL = {
  orange: "#ff5b1f",
  yellow: "#ffd34e",
  pink: "#ff5fa2",
  purple: "#7a52f5",
  blue: "#2a6fdb",
  green: "#1f8a5b",
  cream: "#fff7ea",
};

const STACK: { t: string; c: string; ink?: boolean }[] = [
  { t: "TypeScript", c: COL.blue },
  { t: "React", c: COL.pink },
  { t: "Next.js", c: COL.cream, ink: true },
  { t: "Svelte", c: COL.orange },
  { t: "Node.js", c: COL.green },
  { t: "Python", c: COL.yellow, ink: true },
  { t: "Go", c: COL.purple },
  { t: "Rust", c: COL.orange },
  { t: "PostgreSQL", c: COL.blue },
  { t: "Redis", c: COL.pink },
  { t: "Docker", c: COL.cream, ink: true },
  { t: "Linux", c: COL.yellow, ink: true },
  { t: "AWS", c: COL.green },
  { t: "Tailwind", c: COL.blue },
  { t: "GraphQL", c: COL.pink },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="bg-v5-ink px-6 py-16 text-v5-cream md:px-14 md:py-16"
      style={{ borderRadius: "40px 40px 0 0" }}
    >
      <Reveal>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2
            className="text-[40px] font-bold leading-[1] md:text-[56px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Caixa de ferramentas.
          </h2>
          <span className="inline-flex items-center gap-2 rounded-full bg-v5-yellow px-3.5 py-2 text-[13px] font-medium text-v5-ink">
            atualizada em 2026
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="flex flex-wrap gap-2.5">
          {STACK.map((s) => (
            <span
              key={s.t}
              className="rounded-full px-5 py-3 text-[16px] font-semibold"
              style={{
                background: s.c,
                color: s.ink ? "#1c1410" : "#fff7ea",
              }}
            >
              {s.t}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
