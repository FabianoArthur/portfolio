import { contact } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-2 border-t-[3px] border-v3-ink bg-v3-ink px-6 py-3 text-[11px] tracking-[0.06em] text-v3-cream sm:flex-row sm:items-center md:px-14">
      <span>
        EOF · © {contact.year} · NO COOKIES · NO TRACKING · NO BS
      </span>
      <span>BUILT WITH ❤ AND 0 FRAMEWORKS</span>
    </footer>
  );
}
