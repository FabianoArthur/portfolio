import BouncyPill from "./BouncyPill";

const NAV_ITEMS: { label: string; active?: boolean }[] = [
  { label: "Work", active: true },
  { label: "About" },
  { label: "Stack" },
];

export default function Nav() {
  return (
    <header className="px-6 py-5 md:px-14 md:py-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-v5-ink text-v5-yellow"
            style={{
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: "-0.02em",
            }}
          >
            Z
          </span>
          <span className="text-[18px] font-bold tracking-tight">zhyorg</span>
        </a>

        {/* Center pill nav (hidden on mobile) */}
        <nav
          className="hidden items-center gap-1.5 rounded-full p-1.5 md:flex"
          style={{ background: "rgba(28,20,16,0.06)" }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase()}`}
              className={
                "rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors " +
                (item.active
                  ? "bg-v5-ink text-v5-cream"
                  : "text-v5-ink/80 hover:text-v5-ink")
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Status pill */}
        <BouncyPill
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-v5-green px-3.5 py-2 text-[13px] font-medium text-v5-cream"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-v5-yellow" />
          Aceitando projetos
        </BouncyPill>
      </div>
    </header>
  );
}
