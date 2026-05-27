// V6 — RETRO / NOSTALGIC
// Think: 70s computer manual × Atari × early Apple. Warm cream, burnt orange, computer-era aesthetic.

function V6Retro() {
  const wrap = {
    width: '100%', minHeight: '100%',
    background: '#f0e5cf', color: '#3a1f0d',
    fontFamily: '"VT323", "IBM Plex Mono", ui-monospace, monospace',
    fontSize: 18, lineHeight: 1.4,
    backgroundImage: 'repeating-linear-gradient(0deg, transparent 0 3px, rgba(58,31,13,.04) 3px 4px)',
  };
  const PAL = {
    cream: '#f0e5cf',
    paper: '#e8d9b8',
    ink: '#3a1f0d',
    orange: '#d4501e',
    rust: '#8b3a0a',
    teal: '#2d6b6b',
    mustard: '#c79a2a',
  };
  const display = { fontFamily: '"DM Serif Display", "Cooper Std", Georgia, serif' };
  const monoLabel = { fontFamily: '"VT323", monospace', fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase' };

  return (
    <div style={wrap}>
      {/* COMPUTER WINDOW NAV */}
      <div style={{
        background: PAL.ink, color: PAL.cream, margin: 18, borderRadius: 4,
        boxShadow: `0 0 0 4px ${PAL.ink}, 0 0 0 6px ${PAL.cream}, 0 0 0 8px ${PAL.ink}`,
      }}>
        <div style={{ padding: '8px 14px', borderBottom: `1px solid ${PAL.cream}`, display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
          <span>★ ZHYORG SYSTEM ★ v1976</span>
          <span>MEM: OK · CPU: OK · MOOD: OK</span>
          <span>[ ] [—] [×]</span>
        </div>
        <div style={{ padding: '14px 20px', display: 'flex', gap: 28, fontSize: 16 }}>
          <span style={{ borderBottom: `2px solid ${PAL.orange}`, paddingBottom: 4 }}>F1 HOME</span>
          <span>F2 ABOUT</span>
          <span>F3 WORKS</span>
          <span>F4 STACK</span>
          <span>F5 MAIL</span>
          <span style={{ marginLeft: 'auto', color: PAL.mustard }}>● REC</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{ padding: '40px 56px', display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 36, alignItems: 'center' }}>
        <div>
          <div style={{ ...monoLabel, marginBottom: 12 }}>
            ┌── PRESENTING ──────────────────┐
          </div>
          <h1 style={{
            ...display, fontSize: 156, lineHeight: 0.88,
            margin: '0 0 8px', letterSpacing: '-0.02em', color: PAL.ink,
          }}>
            Fabiano<br/>
            <span style={{ color: PAL.orange, fontStyle: 'italic' }}>Arthur</span>
          </h1>
          <div style={{ ...monoLabel, marginTop: 8 }}>
            └── EST. 2022 · A.K.A. "ZHYORG" ──┘
          </div>
          <p style={{ fontSize: 22, lineHeight: 1.4, marginTop: 28, maxWidth: 540 }}>
            <span style={{ background: PAL.mustard, padding: '2px 6px' }}>FULL-STACK DEVELOPER</span> baseado no Brasil. Construindo na web desde antes de você dizer "framework".
          </p>
          <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
            <a href="#" style={{
              background: PAL.orange, color: PAL.cream, padding: '12px 20px',
              fontFamily: '"VT323", monospace', fontSize: 20, letterSpacing: '.06em', textDecoration: 'none',
              border: `3px double ${PAL.ink}`,
            }}>► PRESS START</a>
            <a href="#" style={{
              background: 'transparent', color: PAL.ink, padding: '12px 20px',
              fontFamily: '"VT323", monospace', fontSize: 20, letterSpacing: '.06em', textDecoration: 'none',
              border: `3px double ${PAL.ink}`,
            }}>◆ VIEW WORKS</a>
          </div>
        </div>

        {/* TV / CRT card */}
        <div style={{
          background: PAL.ink, padding: 18, borderRadius: 24,
          boxShadow: `inset 0 0 0 4px ${PAL.cream}, inset 0 0 0 8px ${PAL.ink}, 0 16px 0 ${PAL.rust}`,
        }}>
          <div style={{
            background: `radial-gradient(ellipse at center, ${PAL.teal} 0%, ${PAL.ink} 90%)`,
            borderRadius: 18, aspectRatio: '4/3', padding: 24,
            position: 'relative', overflow: 'hidden',
            color: '#9cffce', fontFamily: '"VT323", monospace', fontSize: 20,
          }}>
            <div style={{ marginBottom: 12 }}>READY.</div>
            <div>LOAD "PORTFOLIO",8,1</div>
            <div>SEARCHING FOR PORTFOLIO</div>
            <div>LOADING</div>
            <div>READY.</div>
            <div>RUN<span style={{ animation: 'cur 1s steps(2) infinite' }}>█</span></div>
            {/* scanlines */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,0,0,.15) 2px 3px)',
              pointerEvents: 'none',
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 14, color: PAL.cream }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: PAL.orange }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: PAL.mustard }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: PAL.teal }} />
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: '@keyframes cur{50%{opacity:0}}' }} />
      </div>

      {/* ABOUT PAPER */}
      <div style={{ padding: '40px 56px' }}>
        <div style={{
          background: PAL.paper, padding: 36,
          border: `2px solid ${PAL.ink}`,
          boxShadow: `8px 8px 0 ${PAL.orange}`,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: -16, left: 24,
            background: PAL.orange, color: PAL.cream, padding: '4px 14px',
            fontFamily: '"VT323", monospace', fontSize: 18, letterSpacing: '.06em',
          }}>FILE: ABOUT.TXT</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>
            <div>
              <h3 style={{ ...display, fontSize: 40, margin: '0 0 12px', color: PAL.rust }}>Olá, mundo.</h3>
              <p style={{ fontSize: 20, lineHeight: 1.5, margin: 0 }}>
                Sou um desenvolvedor que aprendeu a programar lendo manuais e quebrando coisas. Hoje construo aplicações web modernas — mas o jeito de pensar é o mesmo: <strong>entender o sistema, respeitar a ferramenta</strong>.
              </p>
            </div>
            <div>
              <h3 style={{ ...display, fontSize: 40, margin: '0 0 12px', color: PAL.rust }}>Hello, world.</h3>
              <p style={{ fontSize: 20, lineHeight: 1.5, margin: 0 }}>
                I'm a full-stack developer who learned by reading manuals and breaking things. I build modern web apps with the same mindset I had at age 12: <strong>understand the system, respect the tool</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS — like cassette catalog */}
      <div style={{ padding: '40px 56px' }}>
        <div style={{ ...monoLabel, fontSize: 18, marginBottom: 8 }}>══════════ CATALOG / 1976 ══════════</div>
        <h2 style={{ ...display, fontSize: 80, margin: '0 0 28px', letterSpacing: '-0.02em' }}>
          Greatest Hits<span style={{ color: PAL.orange }}>.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 18 }}>
          {[
            { t: 'SIDE A', n: '01', label: 'In production', col: PAL.orange },
            { t: 'SIDE A', n: '02', label: 'Coming soon', col: PAL.teal },
            { t: 'SIDE B', n: '03', label: 'Open slot', col: PAL.mustard },
            { t: 'SIDE B', n: '04', label: 'Open slot', col: PAL.rust },
          ].map((p) => (
            <div key={p.n} style={{
              background: PAL.paper, border: `2px solid ${PAL.ink}`, padding: 16,
              boxShadow: `4px 4px 0 ${PAL.ink}`,
            }}>
              <div style={{
                aspectRatio: '1/1', background: p.col, position: 'relative',
                border: `1px solid ${PAL.ink}`, marginBottom: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
              }}>
                {/* cassette wheels */}
                <div style={{ position: 'absolute', top: '38%', left: '20%', width: 40, height: 40, borderRadius: '50%', background: PAL.cream, border: `2px solid ${PAL.ink}` }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: PAL.ink, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                </div>
                <div style={{ position: 'absolute', top: '38%', right: '20%', width: 40, height: 40, borderRadius: '50%', background: PAL.cream, border: `2px solid ${PAL.ink}` }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: PAL.ink, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                </div>
                <div style={{
                  position: 'absolute', bottom: '18%', left: '12%', right: '12%', height: 22,
                  background: PAL.cream, border: `1px solid ${PAL.ink}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, color: PAL.ink,
                }}>TRACK {p.n}</div>
              </div>
              <div style={{ ...monoLabel, color: PAL.rust }}>{p.t} · {p.n}</div>
              <div style={{ fontSize: 22, marginTop: 4 }}>{p.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* STACK in pixel chips */}
      <div style={{ padding: '40px 56px' }}>
        <h2 style={{ ...display, fontSize: 64, margin: '0 0 20px' }}>
          The Toolbox<span style={{ color: PAL.orange }}>.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
          {[
            ['TS', 'TypeScript'], ['JS', 'JavaScript'], ['PY', 'Python'], ['GO', 'Golang'], ['RB', 'Ruby'], ['RS', 'Rust'],
            ['RE', 'React'], ['NX', 'Next.js'], ['SV', 'Svelte'], ['ND', 'Node.js'], ['PG', 'Postgres'], ['DK', 'Docker'],
          ].map(([k, name]) => (
            <div key={k} style={{
              border: `2px solid ${PAL.ink}`, padding: 14, background: PAL.paper,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            }}>
              <div style={{
                width: 56, height: 56, background: PAL.orange, color: PAL.cream,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"VT323", monospace', fontSize: 28, letterSpacing: '.04em',
                border: `2px solid ${PAL.ink}`,
              }}>{k}</div>
              <div style={{ fontSize: 16 }}>{name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT — postcard */}
      <div style={{ padding: '40px 56px 56px' }}>
        <div style={{
          background: PAL.paper, padding: 0, border: `2px solid ${PAL.ink}`,
          boxShadow: `10px 10px 0 ${PAL.teal}`,
          display: 'grid', gridTemplateColumns: '7fr 5fr',
        }}>
          <div style={{ padding: 36, borderRight: `2px dashed ${PAL.ink}` }}>
            <div style={monoLabel}>·····················</div>
            <h2 style={{ ...display, fontSize: 72, margin: '4px 0 8px', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
              Drop a postcard.
            </h2>
            <p style={{ fontSize: 20, lineHeight: 1.5, margin: 0 }}>
              Estou aceitando freelas e contratos para 2026. Escolha o canal — resposta em até 24 horas, ou no próximo correio.
            </p>
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:fabianoarthur47@gmail.com" style={{
                fontFamily: '"VT323", monospace', fontSize: 26,
                border: `2px solid ${PAL.ink}`, padding: '10px 16px',
                background: PAL.cream, color: PAL.ink, textDecoration: 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
              }}>
                <span>✉ fabianoarthur47@gmail.com</span><span>→</span>
              </a>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" style={{
                fontFamily: '"VT323", monospace', fontSize: 26,
                border: `2px solid ${PAL.ink}`, padding: '10px 16px',
                background: '#9cd9a5', color: PAL.ink, textDecoration: 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
              }}>
                <span>☏ WhatsApp · +55 (XX) XXXXX-XXXX</span><span>→</span>
              </a>
            </div>
          </div>
          <div style={{ padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={monoLabel}>TO:</div>
              <div style={{ fontSize: 22, marginTop: 6 }}>Future client / Futuro cliente</div>
              <div style={{ fontSize: 18, color: PAL.rust, marginTop: 4 }}>Earth · 2026</div>
            </div>
            <div style={{
              border: `2px solid ${PAL.ink}`, width: 80, height: 100, alignSelf: 'flex-end',
              background: PAL.orange, padding: 6,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                width: '100%', height: '100%', border: `1px dashed ${PAL.cream}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: PAL.cream, fontSize: 14, textAlign: 'center', lineHeight: 1.1,
              }}>POSTAGE<br/>PAID</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', ...monoLabel }}>
          <span>© 1976—2026 · ZHYORG.DEV · ALL SIGNALS RESERVED</span>
          <span>GITHUB · LINKEDIN · TWITTER</span>
        </div>
      </div>
    </div>
  );
}

window.V6Retro = V6Retro;
