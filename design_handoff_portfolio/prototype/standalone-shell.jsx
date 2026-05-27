// Shared scaffold for standalone landing pages.
// - Mounts the chosen variation full-bleed
// - Adds a discreet floating nav to switch between the 4 variations
// - Adds smooth-scroll + a tiny "scroll for more" cue on first visit

function StandaloneShell({ children, current, accent = '#000', bg = '#fff' }) {
  const [navOpen, setNavOpen] = React.useState(false);

  const pages = [
    { id: 'v3-brutalist', label: 'V3 · Brutalist', tint: '#ff4d1c' },
    { id: 'v4-dark', label: 'V4 · Dark Elegant', tint: '#b48cff' },
    { id: 'v5-vibrant', label: 'V5 · Vibrant', tint: '#ff5b1f' },
    { id: 'v6-retro', label: 'V6 · Retro', tint: '#d4501e' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: bg }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', background: bg }}>
        {children}
      </div>

      {/* Floating switcher */}
      <div style={{
        position: 'fixed', bottom: 20, right: 20, zIndex: 9999,
        fontFamily: 'ui-monospace, "SF Mono", monospace',
      }}>
        {navOpen && (
          <div style={{
            background: '#fff', borderRadius: 14, padding: 8,
            boxShadow: '0 20px 60px rgba(0,0,0,.25), 0 0 0 1px rgba(0,0,0,.06)',
            marginBottom: 10, minWidth: 220,
          }}>
            <div style={{ fontSize: 10, letterSpacing: '.12em', color: '#888', padding: '8px 10px 6px', textTransform: 'uppercase' }}>
              Outras direções
            </div>
            {pages.map((p) => {
              const active = p.id === current;
              return (
                <a key={p.id} href={`${p.id}.html`} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 10px', borderRadius: 8, textDecoration: 'none',
                  background: active ? 'rgba(0,0,0,.05)' : 'transparent',
                  color: '#1a1a1a', fontSize: 13, fontWeight: active ? 600 : 500,
                  cursor: active ? 'default' : 'pointer',
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'rgba(0,0,0,.04)'; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span style={{ width: 10, height: 10, borderRadius: 3, background: p.tint }} />
                  <span style={{ flex: 1 }}>{p.label}</span>
                  {active && <span style={{ color: '#888', fontSize: 10 }}>atual</span>}
                </a>
              );
            })}
            <div style={{ borderTop: '1px solid rgba(0,0,0,.06)', marginTop: 6, paddingTop: 6 }}>
              <a href="index.html" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 10px', borderRadius: 8, textDecoration: 'none',
                color: '#1a1a1a', fontSize: 13, fontWeight: 500,
              }}>
                <span>←</span><span>Voltar ao hub</span>
              </a>
            </div>
          </div>
        )}
        <button onClick={() => setNavOpen(!navOpen)} style={{
          background: '#1a1a1a', color: '#fff', border: 'none',
          borderRadius: 999, padding: '12px 18px', fontFamily: 'inherit', fontSize: 13,
          fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
          boxShadow: '0 12px 40px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.1)',
          letterSpacing: '.02em',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: accent }} />
          {navOpen ? 'Fechar' : 'Trocar direção'}
          <span style={{ opacity: .5 }}>{navOpen ? '×' : '↑'}</span>
        </button>
      </div>
    </div>
  );
}

window.StandaloneShell = StandaloneShell;
