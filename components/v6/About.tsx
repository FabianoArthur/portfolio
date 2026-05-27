import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-10 md:px-14 md:py-12">
      <Reveal>
        <div
          className="relative bg-v6-paper"
          style={{
            padding: 36,
            border: "2px solid #3a1f0d",
            boxShadow: "8px 8px 0 #d4501e",
          }}
        >
          {/* File tab */}
          <div
            className="absolute bg-v6-orange text-v6-cream"
            style={{
              top: -16,
              left: 24,
              padding: "4px 14px",
              fontFamily: "var(--font-vt323), monospace",
              fontSize: 18,
              letterSpacing: "0.06em",
            }}
          >
            FILE: ABOUT.TXT
          </div>

          <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
            <div>
              <h3
                className="text-v6-rust"
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: 40,
                  margin: "0 0 12px",
                  lineHeight: 1,
                }}
              >
                Olá, mundo.
              </h3>
              <p className="m-0 text-[18px] leading-[1.5] md:text-[20px]">
                Sou um desenvolvedor que aprendeu a programar lendo manuais e
                quebrando coisas. Hoje construo aplicações web modernas — mas o
                jeito de pensar é o mesmo:{" "}
                <strong>entender o sistema, respeitar a ferramenta</strong>.
              </p>
            </div>
            <div>
              <h3
                className="text-v6-rust"
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: 40,
                  margin: "0 0 12px",
                  lineHeight: 1,
                }}
              >
                Hello, world.
              </h3>
              <p className="m-0 text-[18px] leading-[1.5] md:text-[20px]">
                I&apos;m a full-stack developer who learned by reading manuals
                and breaking things. I build modern web apps with the same
                mindset I had at age 12:{" "}
                <strong>understand the system, respect the tool</strong>.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
