import Reveal from "./Reveal";
import { contact } from "@/lib/contact";

export default function Contact() {
  const socials: { label: string; href: string }[] = [
    { label: "github / @FabianoArthur", href: contact.socials.github },
    { label: "linkedin / fabiano-arthur", href: contact.socials.linkedin },
    { label: `email / ${contact.email}`, href: `mailto:${contact.email}` },
    {
      label: `whatsapp / ${contact.whatsappLabel}`,
      href: contact.whatsappUrl,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 px-6 py-8 md:grid-cols-2 md:px-14 md:py-10">
      {/* LEFT — primary contact CTA */}
      <Reveal>
        <div className="border-[3px] border-v3-ink bg-v3-ink p-6 text-v3-cream shadow-[6px_6px_0_#000]">
          <div className="text-[11px] tracking-[0.1em] text-v3-yellow">
            &gt; ./contact --send
          </div>
          <h3
            className="my-3 text-[40px] uppercase leading-[0.95] sm:text-[48px] md:text-[56px]"
            style={{
              fontFamily: "var(--font-archivo-black), Helvetica, sans-serif",
              fontWeight: 900,
            }}
          >
            SAY HI.
          </h3>
          <p className="m-0 text-[14px]">
            nenhum projeto é pequeno demais. nenhum bug é estranho demais.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-block border-[3px] border-v3-ink bg-v3-orange px-5 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-v3-ink shadow-[6px_6px_0_#000] transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#000] sm:text-[14px]"
              style={{ wordBreak: "break-word" }}
            >
              ✉ {contact.email.toUpperCase()} →
            </a>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block border-[3px] border-v3-ink bg-[#25D366] px-5 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-v3-ink shadow-[6px_6px_0_#000] transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#000] sm:text-[14px]"
            >
              ▶ WHATSAPP / DM DIRETO →
            </a>
            <div className="mt-1 text-[11px] tracking-[0.06em] text-v3-yellow">
              &gt; resposta &lt; 24h · seg-sex · BRT
            </div>
          </div>
        </div>
      </Reveal>

      {/* RIGHT — follow list */}
      <Reveal delay={0.05}>
        <div className="border-[3px] border-v3-ink bg-white p-6 shadow-[6px_6px_0_#000]">
          <div className="text-[11px] tracking-[0.1em]">&gt; ./follow</div>
          <div className="mt-4 flex flex-col gap-[10px]">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="flex items-center justify-between border-[2px] border-v3-ink bg-v3-yellow px-[14px] py-3 text-[13px] transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <span className="break-all pr-2">{s.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
