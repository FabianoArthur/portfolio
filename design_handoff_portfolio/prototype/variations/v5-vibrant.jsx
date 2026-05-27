// V5 — VIBRANT / PLAYFUL-PROFESSIONAL
// Think: Stripe Sessions × Figma. Saturated color, shape language, optimistic.

function V5Vibrant() {
  const wrap = {
    width: '100%', minHeight: '100%',
    background: '#fff7ea', color: '#1c1410',
    fontFamily: '"General Sans", "Inter", -apple-system, system-ui, sans-serif',
    overflow: 'hidden',
  };
  const COL = {
    orange: '#ff5b1f',
    yellow: '#ffd34e',
    pink: '#ff5fa2',
    purple: '#7a52f5',
    blue: '#2a6fdb',
    green: '#1f8a5b',
    cream: '#fff7ea',
    ink: '#1c1410',
  };
  const pill = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '8px 14px', borderRadius: 999,
    background: COL.ink, color: COL.cream, fontSize: 13, fontWeight: 500,
  };
  const btn = {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    padding: '16px 24px', borderRadius: 999,
    background: COL.ink, color: COL.cream, fontWeight: 600, fontSize: 15,
    textDecoration: 'none', border: 'none', cursor: 'pointer',
  };
  const btnAlt = { ...btn, background: COL.orange, color: COL.cream };

  return (
    <div style={wrap}>
      {/* NAV — sticky-style */}
      <div style={{ padding: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, background: COL.ink, color: COL.yellow,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em',
          }}>Z</div>
          <span style={{ fontWeight: 700, fontSize: 18 }}>zhyorg</span>
        </div>
        <div style={{ display: 'flex', gap: 6, background: 'rgba(28,20,16,.06)', padding: 6, borderRadius: 999, fontSize: 14, fontWeight: 500 }}>
          {['Work', 'About', 'Stack', 'Writing'].map((t) => (
            <span key={t} style={{ padding: '8px 14px', borderRadius: 999, ...(t === 'Work' ? { background: COL.ink, color: COL.cream } : {}) }}>{t}</span>
          ))}
        </div>
        <a href="#" style={{ ...pill, background: COL.green }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: COL.yellow }} />
          Aceitando projetos
        </a>
      </div>

      {/* HERO — playful big type with stickers */}
      <div style={{ padding: '40px 56px 80px', position: 'relative' }}>
        {/* sticker shapes */}
        <div style={{
          position: 'absolute', top: 60, right: 80, width: 120, height: 120,
          background: COL.yellow, borderRadius: '50%', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', top: 220, right: 220, width: 80, height: 80,
          background: COL.pink, borderRadius: 18, transform: 'rotate(15deg)', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', top: 360, right: 60, width: 100, height: 100,
          background: COL.purple, zIndex: 0,
          clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={pill}>👋 Olá, eu sou o Fabiano</div>
          <h1 style={{
            fontSize: 156, lineHeight: 0.9, letterSpacing: '-0.045em',
            margin: '24px 0 0', fontWeight: 700,
          }}>
            Eu construo<br/>
            <span style={{ color: COL.orange }}>coisas legais</span><br/>
            com <span style={{
              background: COL.ink, color: COL.yellow,
              padding: '0 18px', borderRadius: 20, display: 'inline-block',
            }}>código.</span>
          </h1>
          <p style={{ fontSize: 22, lineHeight: 1.5, maxWidth: 620, margin: '32px 0 0', color: 'rgba(28,20,16,.7)' }}>
            Desenvolvedor full-stack ajudando empresas e ideias a virarem produtos reais — do banco de dados ao botão de comprar.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 12, alignItems: 'center' }}>
            <a href="#" style={btnAlt}>Vamos conversar →</a>
            <a href="#" style={{ ...btn, background: 'transparent', color: COL.ink, border: `2px solid ${COL.ink}` }}>Ver trabalhos</a>
            <span style={{ fontSize: 13, color: 'rgba(28,20,16,.6)', marginLeft: 8 }}>↘ resposta em ~24h</span>
          </div>
        </div>
      </div>

      {/* CARD ROW — what I do */}
      <div style={{ padding: '0 56px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 18 }}>
          <div style={{ background: COL.ink, color: COL.cream, borderRadius: 28, padding: 32, position: 'relative', overflow: 'hidden' }}>
            <div style={{ ...pill, background: COL.yellow, color: COL.ink }}>Frontend</div>
            <h3 style={{ fontSize: 36, lineHeight: 1.05, margin: '20px 0 12px', fontWeight: 600, letterSpacing: '-0.02em' }}>
              Interfaces que dão prazer de usar.
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.55, opacity: .75, margin: 0 }}>
              React, Next.js, TypeScript. Animação na hora certa, performance no lugar certo.
            </p>
            <div style={{
              position: 'absolute', right: -40, bottom: -40, width: 200, height: 200,
              borderRadius: '50%', background: COL.orange, opacity: .3,
            }} />
          </div>
          <div style={{ background: COL.pink, color: COL.ink, borderRadius: 28, padding: 32 }}>
            <div style={{ ...pill, background: COL.ink, color: COL.pink }}>Backend</div>
            <h3 style={{ fontSize: 28, lineHeight: 1.1, margin: '20px 0 12px', fontWeight: 600, letterSpacing: '-0.02em' }}>
              APIs sólidas, banco que aguenta.
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.55, margin: 0 }}>
              Node, Python, Go, Postgres, Redis — o tijolo certo pro problema certo.
            </p>
          </div>
          <div style={{ background: COL.yellow, color: COL.ink, borderRadius: 28, padding: 32 }}>
            <div style={{ ...pill, background: COL.ink, color: COL.yellow }}>Infra</div>
            <h3 style={{ fontSize: 28, lineHeight: 1.1, margin: '20px 0 12px', fontWeight: 600, letterSpacing: '-0.02em' }}>
              Roda no dev, roda em produção.
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.55, margin: 0 }}>
              Docker, Linux, CI/CD. Deploy sem drama, monitoramento sem sustos.
            </p>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div style={{ padding: '0 56px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
          <h2 style={{ fontSize: 64, margin: 0, fontWeight: 700, letterSpacing: '-0.035em' }}>
            Trabalhos<br/><span style={{ fontStyle: 'italic', color: COL.purple }}>selecionados.</span>
          </h2>
          <span style={{ ...pill }}>↓ 4 vagas abertas</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          {[
            { tag: 'em construção', title: 'Project 001', color: COL.orange, num: '01' },
            { tag: 'em construção', title: 'Project 002', color: COL.blue, num: '02' },
            { tag: 'vaga aberta', title: 'O seu projeto aqui?', color: COL.green, num: '03' },
            { tag: 'vaga aberta', title: 'Open commission slot', color: COL.purple, num: '04' },
          ].map((p, i) => (
            <div key={i} style={{
              borderRadius: 24, background: '#fff', padding: 8,
              border: `1.5px solid rgba(28,20,16,.1)`,
            }}>
              <div style={{
                aspectRatio: '16/10', borderRadius: 18,
                background: `radial-gradient(circle at 30% 30%, ${p.color}, ${p.color}88)`,
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  width: 44, height: 44, borderRadius: 14, background: COL.ink, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700,
                }}>{p.num}</div>
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
                  background: `radial-gradient(circle at 80% 80%, rgba(255,255,255,.4), transparent 60%)`,
                }} />
              </div>
              <div style={{ padding: '18px 14px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: 12, color: 'rgba(28,20,16,.6)', fontWeight: 500, letterSpacing: '.05em', textTransform: 'uppercase' }}>{p.tag}</div>
                  <div style={{ fontSize: 22, fontWeight: 600, marginTop: 4, letterSpacing: '-0.01em' }}>{p.title}</div>
                </div>
                <div style={{ fontSize: 22 }}>→</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STACK BAND */}
      <div style={{ background: COL.ink, color: COL.cream, padding: '64px 56px', borderRadius: '40px 40px 0 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
          <h2 style={{ fontSize: 56, margin: 0, fontWeight: 700, letterSpacing: '-0.03em' }}>
            Caixa de ferramentas.
          </h2>
          <span style={{ ...pill, background: COL.yellow, color: COL.ink }}>atualizada em 2026</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            { t: 'TypeScript', c: COL.blue },
            { t: 'React', c: COL.pink },
            { t: 'Next.js', c: COL.cream, ink: true },
            { t: 'Svelte', c: COL.orange },
            { t: 'Node.js', c: COL.green },
            { t: 'Python', c: COL.yellow, ink: true },
            { t: 'Go', c: COL.purple },
            { t: 'Rust', c: COL.orange },
            { t: 'PostgreSQL', c: COL.blue },
            { t: 'Redis', c: COL.pink },
            { t: 'Docker', c: COL.cream, ink: true },
            { t: 'Linux', c: COL.yellow, ink: true },
            { t: 'AWS', c: COL.green },
            { t: 'Tailwind', c: COL.blue },
            { t: 'GraphQL', c: COL.pink },
          ].map((s) => (
            <span key={s.t} style={{
              padding: '12px 20px', borderRadius: 999, background: s.c, color: s.ink ? COL.ink : COL.cream,
              fontWeight: 600, fontSize: 16,
            }}>{s.t}</span>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div style={{ background: COL.ink, color: COL.cream, padding: '32px 56px 80px' }}>
        <div style={{
          background: COL.orange, borderRadius: 32, padding: '56px 48px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24,
        }}>
          <div>
            <div style={{ ...pill, background: COL.ink, color: COL.yellow }}>vamos juntos</div>
            <h2 style={{
              fontSize: 72, lineHeight: 1, margin: '18px 0 0', fontWeight: 700,
              letterSpacing: '-0.035em', color: COL.ink,
            }}>
              Tem uma ideia?<br/>Manda ver.
            </h2>
            <p style={{ marginTop: 16, fontSize: 16, color: COL.ink, opacity: .75, maxWidth: 360 }}>
              Escolha o canal — respondo em até 24h.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 320 }}>
            <a href="mailto:fabianoarthur47@gmail.com" style={{
              ...btn, background: COL.ink, color: COL.cream, fontSize: 17, padding: '20px 28px',
              justifyContent: 'space-between', width: '100%',
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 8, background: COL.yellow, color: COL.ink,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
                }}>✉</span>
                fabianoarthur47@gmail.com
              </span>
              <span>→</span>
            </a>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" style={{
              ...btn, background: '#25D366', color: COL.ink, fontSize: 17, padding: '20px 28px',
              justifyContent: 'space-between', width: '100%',
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 999, background: COL.ink, color: '#25D366',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800,
                }}>W</span>
                WhatsApp · chat direto
              </span>
              <span>→</span>
            </a>
            <div style={{
              fontSize: 12, color: COL.ink, opacity: .6,
              textAlign: 'right', fontFamily: 'ui-monospace, monospace', letterSpacing: '.04em',
            }}>+55 (XX) XXXXX-XXXX · seg → sex</div>
          </div>
        </div>
        <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', fontSize: 13, opacity: .6 }}>
          <span>© 2026 Fabiano Arthur · feito com cuidado em SP</span>
          <span>github · linkedin · twitter · bluesky</span>
        </div>
      </div>
    </div>
  );
}

window.V5Vibrant = V5Vibrant;
