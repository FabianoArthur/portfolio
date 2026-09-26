import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div data-reveal className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        <h2 id={headingId} className="mt-3 font-serif text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl">
          {title}
        </h2>
        {intro ? <p className="mt-4 text-lg leading-relaxed text-dim">{intro}</p> : null}
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}
