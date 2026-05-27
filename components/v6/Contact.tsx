import Reveal from "./Reveal";
import { contact } from "@/lib/contact";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-10 md:px-14 md:pb-14 md:pt-12">
      <Reveal>
        <div
          className="grid grid-cols-1 bg-v6-paper md:grid-cols-12"
          style={{
            border: "2px solid #3a1f0d",
            boxShadow: "10px 10px 0 #2d6b6b",
          }}
        >
          {/* LEFT — message */}
          <div
            className="md:col-span-7"
            style={{
              padding: 32,
              borderRight: "2px dashed #3a1f0d",
            }}
          >
            <div
              className="uppercase"
              style={{
                fontFamily: "var(--font-vt323), monospace",
                fontSize: 16,
                letterSpacing: "0.04em",
              }}
            >
              ·····················
            </div>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                margin: "4px 0 8px",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
              }}
            >
              <span className="block text-[44px] sm:text-[56px] md:text-[72px]">
                Drop a postcard.
              </span>
            </h2>
            <p className="m-0 text-[18px] leading-[1.5] md:text-[20px]">
              Estou aceitando freelas e contratos para {contact.year}. Escolha o
              canal — resposta em até 24 horas, ou no próximo correio.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center justify-between gap-3 bg-v6-cream text-v6-ink no-underline"
                style={{
                  fontFamily: "var(--font-vt323), monospace",
                  fontSize: 22,
                  border: "2px solid #3a1f0d",
                  padding: "10px 16px",
                }}
              >
                <span className="truncate">✉ {contact.email}</span>
                <span>→</span>
              </a>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 text-v6-ink no-underline"
                style={{
                  fontFamily: "var(--font-vt323), monospace",
                  fontSize: 22,
                  border: "2px solid #3a1f0d",
                  padding: "10px 16px",
                  background: "#9cd9a5",
                }}
              >
                <span className="truncate">
                  ☏ WhatsApp · {contact.whatsappLabel}
                </span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* RIGHT — postcard "TO:" + stamp */}
          <div
            className="flex flex-col justify-between gap-6 md:col-span-5"
            style={{ padding: 32 }}
          >
            <div>
              <div
                className="uppercase"
                style={{
                  fontFamily: "var(--font-vt323), monospace",
                  fontSize: 16,
                  letterSpacing: "0.04em",
                }}
              >
                TO:
              </div>
              <div className="mt-[6px] text-[20px] md:text-[22px]">
                Future client / Futuro cliente
              </div>
              <div className="mt-1 text-[16px] text-v6-rust md:text-[18px]">
                Earth · {contact.year}
              </div>
            </div>

            {/* Stamp */}
            <div
              className="flex items-center justify-center self-end bg-v6-orange"
              style={{
                width: 80,
                height: 100,
                border: "2px solid #3a1f0d",
                padding: 6,
              }}
            >
              <div
                className="flex h-full w-full items-center justify-center text-center text-v6-cream"
                style={{
                  border: "1px dashed #f0e5cf",
                  fontFamily: "var(--font-vt323), monospace",
                  fontSize: 14,
                  lineHeight: 1.1,
                }}
              >
                POSTAGE
                <br />
                PAID
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
