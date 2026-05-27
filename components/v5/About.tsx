import Reveal from "./Reveal";

const CARDS: {
  tag: string;
  tagBg: "bg-v5-yellow" | "bg-v5-ink" | "bg-v5-ink";
  tagText: "text-v5-ink" | "text-v5-pink" | "text-v5-yellow";
  bg: "bg-v5-ink" | "bg-v5-pink" | "bg-v5-yellow";
  fg: "text-v5-cream" | "text-v5-ink";
  title: string;
  body: string;
  titleSize: string;
  withBlob?: boolean;
}[] = [
  {
    tag: "Frontend",
    tagBg: "bg-v5-yellow",
    tagText: "text-v5-ink",
    bg: "bg-v5-ink",
    fg: "text-v5-cream",
    title: "Interfaces que dão prazer de usar.",
    body: "React, Next.js, TypeScript. Animação na hora certa, performance no lugar certo.",
    titleSize: "text-[28px] md:text-[36px]",
    withBlob: true,
  },
  {
    tag: "Backend",
    tagBg: "bg-v5-ink",
    tagText: "text-v5-pink",
    bg: "bg-v5-pink",
    fg: "text-v5-ink",
    title: "APIs sólidas, banco que aguenta.",
    body: "Node, Python, Go, Postgres, Redis — o tijolo certo pro problema certo.",
    titleSize: "text-[24px] md:text-[28px]",
  },
  {
    tag: "Infra",
    tagBg: "bg-v5-ink",
    tagText: "text-v5-yellow",
    bg: "bg-v5-yellow",
    fg: "text-v5-ink",
    title: "Roda no dev, roda em produção.",
    body: "Docker, Linux, CI/CD. Deploy sem drama, monitoramento sem sustos.",
    titleSize: "text-[24px] md:text-[28px]",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 pb-16 md:px-14 md:pb-16">
      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-[1.4fr_1fr_1fr]">
        {CARDS.map((card, i) => (
          <Reveal key={card.tag} delay={i * 0.08}>
            <article
              className={`relative h-full overflow-hidden rounded-[28px] p-8 ${card.bg} ${card.fg}`}
            >
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-medium ${card.tagBg} ${card.tagText}`}
              >
                {card.tag}
              </span>
              <h3
                className={`mt-5 mb-3 font-semibold leading-[1.05] ${card.titleSize}`}
                style={{ letterSpacing: "-0.02em" }}
              >
                {card.title}
              </h3>
              <p
                className="text-[15px] leading-[1.55]"
                style={card.fg === "text-v5-cream" ? { opacity: 0.75 } : {}}
              >
                {card.body}
              </p>
              {card.withBlob && (
                <span
                  className="pointer-events-none absolute rounded-full bg-v5-orange"
                  style={{
                    right: -40,
                    bottom: -40,
                    width: 200,
                    height: 200,
                    opacity: 0.3,
                  }}
                />
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
