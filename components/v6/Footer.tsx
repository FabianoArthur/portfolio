import { contact } from "@/lib/contact";

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-start justify-between gap-3 px-6 pb-10 text-v6-ink md:flex-row md:items-center md:px-14 md:pb-12"
      style={{
        fontFamily: "var(--font-vt323), monospace",
        fontSize: 16,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
      }}
    >
      <span>
        © 1976—{contact.year} · ZHYORG.DEV · ALL SIGNALS RESERVED
      </span>
      <span className="flex flex-wrap gap-3">
        <a
          href={contact.socials.github}
          target="_blank"
          rel="noreferrer"
          className="no-underline text-v6-ink hover:text-v6-orange"
        >
          GITHUB
        </a>
        <span>·</span>
        <a
          href={contact.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="no-underline text-v6-ink hover:text-v6-orange"
        >
          LINKEDIN
        </a>
        <span>·</span>
        <a
          href={`mailto:${contact.email}`}
          className="no-underline text-v6-ink hover:text-v6-orange"
        >
          MAIL
        </a>
      </span>
    </footer>
  );
}
