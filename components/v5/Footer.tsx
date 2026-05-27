import { contact } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-v5-ink px-6 pb-10 pt-2 text-v5-cream md:px-14">
      <div
        className="flex flex-wrap items-center justify-between gap-3 text-[13px]"
        style={{ opacity: 0.6 }}
      >
        <span>
          © {contact.year} {contact.name} · feito com cuidado em SP
        </span>
        <span className="flex flex-wrap items-center gap-3">
          <a
            href={contact.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-100"
          >
            github
          </a>
          <span aria-hidden>·</span>
          <a
            href={contact.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-100"
          >
            linkedin
          </a>
        </span>
      </div>
    </footer>
  );
}
