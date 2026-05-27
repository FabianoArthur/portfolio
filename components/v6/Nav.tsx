export default function Nav() {
  return (
    <header className="px-4 pt-4 md:px-[18px] md:pt-[18px]">
      <div
        className="bg-v6-ink text-v6-cream"
        style={{
          borderRadius: 4,
          boxShadow:
            "0 0 0 4px #3a1f0d, 0 0 0 6px #f0e5cf, 0 0 0 8px #3a1f0d",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center justify-between gap-3 border-b border-v6-cream px-3 py-2 text-[11px] md:text-[14px] md:px-[14px]"
          style={{
            fontFamily: "var(--font-vt323), monospace",
            letterSpacing: "0.04em",
          }}
        >
          <span>★ ZHYORG SYSTEM ★ v1976</span>
          <span className="hidden md:inline">
            MEM: OK · CPU: OK · MOOD: OK
          </span>
          <span>[ ] [—] [×]</span>
        </div>

        {/* Function keys row */}
        <div
          className="flex flex-wrap items-center gap-4 px-4 py-3 text-[13px] md:text-[16px] md:gap-7 md:px-5 md:py-[14px]"
          style={{
            fontFamily: "var(--font-vt323), monospace",
            letterSpacing: "0.04em",
          }}
        >
          <a href="#" className="text-v6-cream no-underline">
            F1 HOME
          </a>
          <a href="#about" className="text-v6-cream no-underline">
            F2 ABOUT
          </a>
          <a href="#works" className="text-v6-cream no-underline">
            F3 WORKS
          </a>
          <a href="#stack" className="text-v6-cream no-underline">
            F4 STACK
          </a>
          <a href="#contact" className="text-v6-cream no-underline">
            F5 MAIL
          </a>
          <span className="ml-auto text-v6-mustard">● REC</span>
        </div>
      </div>
    </header>
  );
}
