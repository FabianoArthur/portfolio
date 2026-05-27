import BouncyPill from "./BouncyPill";
import Reveal from "./Reveal";
import Shape from "./Shape";

export default function Hero() {
  return (
    <section className="relative px-6 pb-16 pt-6 md:px-14 md:pb-20 md:pt-10">
      {/* Decorative sticker shapes */}
      <Shape
        className="absolute z-0 hidden rounded-full bg-v5-yellow sm:block"
        style={{
          top: 60,
          right: 80,
          width: 120,
          height: 120,
        }}
        duration={6}
      />
      <Shape
        className="absolute z-0 hidden bg-v5-pink sm:block"
        style={{
          top: 220,
          right: 220,
          width: 80,
          height: 80,
          borderRadius: 18,
        }}
        rotate={15}
        duration={5}
      />
      <Shape
        className="absolute z-0 hidden bg-v5-purple sm:block"
        style={{
          top: 360,
          right: 60,
          width: 100,
          height: 100,
          clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
        }}
        duration={7}
      />

      <div className="relative z-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-v5-ink px-3.5 py-2 text-[13px] font-medium text-v5-cream">
            👋 Olá, eu sou o Fabiano
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1
            className="mt-6 text-[56px] font-extrabold leading-[0.9] sm:text-[80px] md:text-[112px] lg:text-[136px]"
            style={{ letterSpacing: "-0.045em" }}
          >
            Eu construo
            <br />
            <span className="text-v5-orange">coisas legais</span>
            <br />
            com{" "}
            <span
              className="inline-block bg-v5-ink text-v5-yellow"
              style={{
                padding: "0 0.15em",
                borderRadius: 20,
              }}
            >
              código.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            className="mt-8 max-w-[620px] text-[18px] leading-[1.5] md:text-[22px]"
            style={{ color: "rgba(28,20,16,0.7)" }}
          >
            Desenvolvedor full-stack ajudando empresas e ideias a virarem
            produtos reais — do banco de dados ao botão de comprar.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <BouncyPill
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-v5-orange px-6 py-4 text-[15px] font-semibold text-v5-cream"
            >
              Vamos conversar →
            </BouncyPill>
            <BouncyPill
              href="#work"
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-4 text-[15px] font-semibold text-v5-ink"
              style={{
                background: "transparent",
                border: "2px solid #1c1410",
              }}
            >
              Ver trabalhos
            </BouncyPill>
            <span
              className="ml-2 text-[13px]"
              style={{ color: "rgba(28,20,16,0.6)" }}
            >
              ↘ resposta em ~24h
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
