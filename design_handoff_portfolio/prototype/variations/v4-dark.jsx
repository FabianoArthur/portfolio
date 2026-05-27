// V4 — DARK ELEGANT / NOIR PREMIUM
// Think: Linear × Vercel × Stripe. Deep blacks, subtle glow, luxurious whitespace.

function V4Dark() {
  const wrap = {
    width: '100%', minHeight: '100%',
    background: '#0a0a0c', color: '#e8e6e3',
    fontFamily: '"Inter", "SF Pro Text", -apple-system, system-ui, sans-serif',
    backgroundImage: 'radial-gradient(ellipse 1200px 600px at 50% -10%, rgba(180,140,255,.12), transparent 60%)',
  };
  const subtle = { color: 'rgba(232,230,227,.55)' };
  const chip = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '6px 12px', borderRadius: 999,
    background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)',
    fontSize: 12, color: 'rgba(232,230,227,.75)',
  };
  const cta = {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    padding: '14px 22px', borderRadius: 10,
    background: 'linear-gradient(180deg, #f6f4ef 0%, #d6d2c8 100%)',
    color: '#0a0a0c', fontWeight: 600, fontSize: 14,
    boxShadow: '0 0 0 1px rgba(255,255,255,.4), 0 12px 30px -10px rgba(255,255,255,.2)',
    textDecoration: 'none',
  };
  const ghost = {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    padding: '14px 22px', borderRadius: 10,
    background: 'rgba(255,255,255,.04)', color: '#e8e6e3', fontWeight: 500, fontSize: 14,
    border: '1px solid rgba(255,255,255,.1)', textDecoration: 'none',
  };
  const card = {
    border: '1px solid rgba(255,255,255,.07)', borderRadius: 14,
    background: 'linear-gradient(180deg, rgba(255,255,255,.025), rgba(255,255,255,.005))',
    padding: 24, position: 'relative', overflow: 'hidden',
  };

  return (
    <div style={wrap}>
      {/* NAV */}
      <div style={{ padding: '20px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: 'conic-gradient(from 180deg, #b48cff, #6ad2ff, #b48cff)',
          }} />
          <span style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>Zhyorg</span>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 14, ...subtle }}>
          <span>Work</span><span>About</span><span>Writing</span><span>Contact</span>
        </div>
        <a href="#" style={{ ...chip, color: '#e8e6e3' }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: '#7CFF9C', boxShadow: '0 0 8px #7CFF9C' }} />
          Available for hire
        </a>
      </div>

      {/* HERO */}
      <div style={{ padding: '120px 64px 100px', textAlign: 'center' }}>
        <div style={chip}>v2026 · portfolio</div>
        <h1 style={{
          fontFamily: '"Instrument Serif", "Times New Roman", serif',
          fontSize: 136, lineHeight: 1, margin: '28px 0 0',
          fontWeight: 400, letterSpacing: '-0.04em',
        }}>
          Software with<br/>
          <span style={{
            fontStyle: 'italic',
            background: 'linear-gradient(180deg, #fff 0%, #b48cff 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>quiet precision.</span>
        </h1>
        <p style={{ ...subtle, fontSize: 20, lineHeight: 1.5, maxWidth: 620, margin: '32px auto 0' }}>
          Sou <span style={{ color: '#e8e6e3' }}>Fabiano Arthur</span> — desenvolvedor full-stack. Construo produtos que funcionam, escalam e respeitam quem os usa.
        </p>
        <div style={{ marginTop: 40, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a href="#" style={cta}>Iniciar um projeto <span>→</span></a>
          <a href="#" style={ghost}>Ver trabalhos</a>
        </div>
      </div>

      {/* TRUSTED BY */}
      <div style={{ padding: '0 64px 80px', textAlign: 'center' }}>
        <div style={{ ...subtle, fontSize: 12, letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: 20 }}>
          Tecnologias que uso, todos os dias
        </div>
        <div style={{ display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap', opacity: .7 }}>
          {['TypeScript', 'React', 'Next.js', 'Node', 'Python', 'Go', 'Postgres', 'Docker'].map((s) => (
            <span key={s} style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em' }}>{s}</span>
          ))}
        </div>
      </div>

      {/* FEATURE GRID */}
      <div style={{ padding: '40px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 16 }}>
          <div style={{ ...card, padding: 0, minHeight: 360 }}>
            <div style={{ padding: 28, position: 'relative', zIndex: 2 }}>
              <div style={chip}>What I do</div>
              <h3 style={{
                fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
                fontSize: 44, fontWeight: 400, margin: '16px 0 12px', letterSpacing: '-0.02em',
              }}>End-to-end engineering.</h3>
              <p style={{ ...subtle, fontSize: 15, lineHeight: 1.55, maxWidth: 460 }}>
                Da arquitetura ao último pixel. Falo igualmente bem com banco de dados, com designers e com produto.
              </p>
            </div>
            {/* abstract decoration */}
            <div style={{
              position: 'absolute', right: -80, bottom: -80, width: 360, height: 360,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, rgba(180,140,255,.5), transparent 60%)',
              filter: 'blur(20px)',
            }} />
            <div style={{
              position: 'absolute', right: 20, top: 20, fontSize: 11, ...subtle,
              fontFamily: 'ui-monospace, monospace',
            }}>fig. 01</div>
          </div>
          <div style={{ ...card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={chip}>Approach</div>
              <h3 style={{ fontSize: 22, fontWeight: 500, margin: '14px 0 8px', letterSpacing: '-0.01em' }}>
                Devagar onde importa.
              </h3>
              <p style={{ ...subtle, fontSize: 14, lineHeight: 1.55 }}>
                Decisões deliberadas, ferramentas afiadas, releases pequenos.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
              {['Type-safe', 'Tested', 'Observable', 'Documented'].map((t) => (
                <span key={t} style={chip}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div style={{ ...card, padding: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
            <div>
              <div style={chip}>Selected work</div>
              <h3 style={{ fontSize: 28, fontWeight: 500, margin: '12px 0 0', letterSpacing: '-0.02em' }}>Trabalhos em construção</h3>
            </div>
            <span style={{ ...subtle, fontSize: 13 }}>2026 — em curso</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
            {[
              { t: 'Project alpha', tag: 'Web · TypeScript', col: '#b48cff' },
              { t: 'Project beta', tag: 'API · Go · Postgres', col: '#6ad2ff' },
              { t: 'Reserved slot', tag: 'Open for commission', col: '#7CFF9C' },
            ].map((p, i) => (
              <div key={i} style={{
                border: '1px solid rgba(255,255,255,.07)', borderRadius: 12,
                padding: 18, background: 'rgba(255,255,255,.02)', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  height: 140, borderRadius: 8, marginBottom: 14,
                  background: `radial-gradient(circle at 30% 30%, ${p.col}33, transparent 60%), linear-gradient(135deg, rgba(255,255,255,.04), rgba(255,255,255,.01))`,
                  border: '1px solid rgba(255,255,255,.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ ...subtle, fontSize: 11, fontFamily: 'ui-monospace, monospace' }}>preview</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: 16, fontWeight: 500 }}>{p.t}</span>
                  <span style={{ ...subtle, fontSize: 12 }}>↗</span>
                </div>
                <div style={{ ...subtle, fontSize: 13, marginTop: 4 }}>{p.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{ padding: '40px 64px' }}>
        <div style={{ ...card, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            ['4', 'anos escrevendo código'],
            ['12+', 'linguagens & frameworks'],
            ['∞', 'cafés consumidos'],
            ['1', 'meta — fazer bem feito'],
          ].map(([n, l], i) => (
            <div key={i} style={{
              padding: '36px 24px', textAlign: 'center',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,.06)' : 'none',
            }}>
              <div style={{
                fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
                fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em',
                background: 'linear-gradient(180deg, #fff, #888)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>{n}</div>
              <div style={{ ...subtle, fontSize: 13, marginTop: 10 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT CTA */}
      <div style={{ padding: '100px 64px', textAlign: 'center' }}>
        <div style={chip}>Get in touch</div>
        <h2 style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 96, lineHeight: 1, margin: '24px 0 16px',
          fontWeight: 400, letterSpacing: '-0.04em',
        }}>
          Tem algo em mente?<br/>
          <span style={{ fontStyle: 'italic', color: '#b48cff' }}>Vamos construir.</span>
        </h2>
        <p style={{ ...subtle, fontSize: 18, maxWidth: 520, margin: '0 auto 32px' }}>
          Resposta em até 24h. Conversa franca, sem floreio. Escolha o canal que preferir.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:fabianoarthur47@gmail.com" style={cta}>
            <span>✉</span> fabianoarthur47@gmail.com
          </a>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" style={{
            ...ghost,
            background: 'rgba(37,211,102,.12)',
            border: '1px solid rgba(37,211,102,.35)',
            color: '#9aefb5',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: '#25D366', boxShadow: '0 0 10px #25D366' }} />
            WhatsApp — chat direto
          </a>
        </div>
        <div style={{ ...subtle, fontSize: 12, marginTop: 18, fontFamily: 'ui-monospace, monospace' }}>
          +55 (XX) XXXXX-XXXX · seg → sex · BRT
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ padding: '32px 64px', borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', justifyContent: 'space-between', ...subtle, fontSize: 13 }}>
        <span>© 2026 Fabiano Arthur · São Paulo</span>
        <span>github · linkedin · twitter</span>
        <span>Designed in the dark.</span>
      </div>
    </div>
  );
}

window.V4Dark = V4Dark;
