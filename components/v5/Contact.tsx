import { contact } from "@/lib/contact";
import BouncyPill from "./BouncyPill";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-v5-ink px-6 pb-20 pt-8 text-v5-cream md:px-14"
    >
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[32px] bg-v5-orange px-7 py-12 md:px-12 md:py-14">
          <div className="max-w-full flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-v5-ink px-3.5 py-2 text-[13px] font-medium text-v5-yellow">
              vamos juntos
            </span>
            <h2
              className="mt-4 text-[44px] font-bold leading-[1] text-v5-ink md:text-[60px] lg:text-[72px]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Tem uma ideia?
              <br />
              Manda ver.
            </h2>
            <p
              className="mt-4 max-w-[360px] text-[16px] text-v5-ink"
              style={{ opacity: 0.75 }}
            >
              Escolha o canal — respondo em até 24h.
            </p>
          </div>

          <div className="flex w-full min-w-[280px] flex-col gap-3 md:w-auto md:min-w-[340px]">
            <BouncyPill
              href={`mailto:${contact.email}`}
              className="inline-flex w-full items-center justify-between gap-3 rounded-full bg-v5-ink px-7 py-5 text-[15px] font-semibold text-v5-cream md:text-[17px]"
            >
              <span className="inline-flex items-center gap-3">
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-[8px] bg-v5-yellow text-[16px] text-v5-ink"
                  aria-hidden
                >
                  ✉
                </span>
                <span className="truncate">{contact.email}</span>
              </span>
              <span>→</span>
            </BouncyPill>

            <BouncyPill
              href={contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-between gap-3 rounded-full px-7 py-5 text-[15px] font-semibold text-v5-ink md:text-[17px]"
              style={{ background: "#25D366" }}
            >
              <span className="inline-flex items-center gap-3">
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-v5-ink font-extrabold"
                  style={{ color: "#25D366" }}
                  aria-hidden
                >
                  W
                </span>
                WhatsApp · chat direto
              </span>
              <span>→</span>
            </BouncyPill>

            <div
              className="text-right font-mono text-[12px] text-v5-ink"
              style={{ opacity: 0.6, letterSpacing: "0.04em" }}
            >
              {contact.whatsappLabel} · seg → sex
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
