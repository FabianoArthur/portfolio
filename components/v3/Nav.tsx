export default function Nav() {
  return (
    <header className="border-b-[3px] border-v3-ink bg-v3-ink text-v3-cream">
      <div className="flex items-center justify-between gap-4 px-6 py-2 text-[11px] tracking-[0.06em] md:px-14">
        <span className="font-(family-name:--font-ibm-plex-mono)">
          [ ZHYORG.SH v0.1.0-alpha ]
        </span>
        <span className="hidden md:inline">
          STATUS: ONLINE · BUILDING · OPEN-FOR-WORK
        </span>
        <span className="hidden sm:inline">&gt; cat about.md</span>
      </div>
    </header>
  );
}
