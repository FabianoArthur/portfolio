// V2 — SWISS MINIMALIST
// Think: Müller-Brockmann × Apple. Helvetica, 12-col grid, severe whitespace.

function V2Swiss() {
  const wrap = {
    width: '100%', minHeight: '100%',
    background: '#ffffff', color: '#0a0a0a',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: 400,
  };
  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    columnGap: 24, rowGap: 0,
    padding: '0 56px',
  };
  const mono = { fontFamily: 'ui-monospace, "SF Mono", monospace', fontSize: 11, letterSpacing: '.04em' };
  const num = { ...mono, color: '#c4302b' };

  return (
    <div style={wrap}>
      {/* NAV */}
      <div style={{ ...grid, paddingTop: 28, paddingBottom: 28, alignItems: 'baseline' }}>
        <div style={{ gridColumn: '1 / 4', ...mono, fontWeight: 700 }}>FABIANO ARTHUR — ZHYORG</div>
        <div style={{ gridColumn: '5 / 8', ...mono }}>Full-Stack Developer</div>
        <div style={{ gridColumn: '9 / 13', ...mono, textAlign: 'right' }}>Index · Work · Stack · Contact</div>
      </div>

      <div style={{ height: 1, background: '#0a0a0a', margin: '0 56px' }} />

      {/* HERO */}
      <div style={{ ...grid, paddingTop: 120, paddingBottom: 160 }}>
        <div style={{ gridColumn: '1 / 2' }}><span style={num}>01</span></div>
        <div style={{ gridColumn: '2 / 11' }}>
          <h1 style={{
            fontSize: 128, lineHeight: 0.92, margin: 0,
            letterSpacing: '-0.045em', fontWeight: 500,
          }}>
            Construindo<br/>
            <span style={{ color: '#c4302b' }}>sistemas</span> que<br/>
            funcionam.
          </h1>
        </div>
        <div style={{ gridColumn: '1 / 5', marginTop: 60 }}>
          <div style={mono}>↳ STATEMENT</div>
        </div>
        <div style={{ gridColumn: '5 / 11', marginTop: 60 }}>
          <p style={{ fontSize: 22, lineHeight: 1.4, margin: 0, fontWeight: 400, letterSpacing: '-0.01em' }}>
            Sou desenvolvedor full-stack. Resolvo problemas com código limpo, decisões deliberadas e atenção desproporcional ao detalhe. Disponível para trabalho contratado em 2026.
          </p>
        </div>
      </div>

      <div style={{ height: 1, background: '#0a0a0a', margin: '0 56px' }} />

      {/* WORK INDEX */}
      <div style={{ ...grid, paddingTop: 80, paddingBottom: 60 }}>
        <div style={{ gridColumn: '1 / 2' }}><span style={num}>02</span></div>
        <div style={{ gridColumn: '2 / 8' }}>
          <h2 style={{ fontSize: 48, margin: 0, fontWeight: 500, letterSpacing: '-0.02em' }}>Trabalhos selecionados</h2>
        </div>
        <div style={{ gridColumn: '9 / 13', textAlign: 'right', alignSelf: 'end' }}>
          <span style={mono}>2026 — em curso</span>
        </div>
      </div>

      {/* PROJECT GRID */}
      <div style={{ ...grid, paddingBottom: 80 }}>
        {[
          ['001', 'Projeto vago / open slot', 'Web application'],
          ['002', 'Projeto vago / open slot', 'API & infrastructure'],
          ['003', 'Projeto vago / open slot', 'Tooling'],
          ['004', 'Projeto vago / open slot', 'Open source'],
        ].map(([n, title, kind], i) => (
          <React.Fragment key={i}>
            <div style={{ gridColumn: 'span 6', borderTop: '1px solid #0a0a0a', paddingTop: 18, paddingBottom: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', ...mono, marginBottom: 16 }}>
                <span>№ {n}</span>
                <span>{kind.toUpperCase()}</span>
              </div>
              <div style={{
                aspectRatio: '4/3', width: '100%',
                background: '#f0f0ec',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'repeating-linear-gradient(90deg, transparent 0 1px, rgba(10,10,10,.04) 1px 2px)',
                }} />
                <div style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                  ...mono, color: 'rgba(10,10,10,.5)',
                }}>[ project visual ]</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 14 }}>
                <span style={{ fontSize: 18, letterSpacing: '-0.01em' }}>{title}</span>
                <span style={mono}>→</span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div style={{ height: 1, background: '#0a0a0a', margin: '0 56px' }} />

      {/* STACK */}
      <div style={{ ...grid, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ gridColumn: '1 / 2' }}><span style={num}>03</span></div>
        <div style={{ gridColumn: '2 / 5' }}>
          <h2 style={{ fontSize: 48, margin: 0, fontWeight: 500, letterSpacing: '-0.02em' }}>Stack</h2>
        </div>
        <div style={{ gridColumn: '6 / 13' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            {[
              ['Frontend', ['TypeScript', 'React', 'Next.js', 'Tailwind']],
              ['Backend', ['Node.js', 'Python', 'Go', 'PostgreSQL']],
              ['Infra', ['Docker', 'Linux', 'AWS', 'CI/CD']],
            ].map(([title, items], i) => (
              <div key={i}>
                <div style={{ ...mono, marginBottom: 14, color: '#c4302b' }}>{title.toUpperCase()}</div>
                {items.map((it) => (
                  <div key={it} style={{ fontSize: 18, letterSpacing: '-0.01em', padding: '6px 0', borderBottom: '1px solid rgba(10,10,10,.08)' }}>{it}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: 1, background: '#0a0a0a', margin: '0 56px' }} />

      {/* CONTACT */}
      <div style={{ ...grid, paddingTop: 80, paddingBottom: 120 }}>
        <div style={{ gridColumn: '1 / 2' }}><span style={num}>04</span></div>
        <div style={{ gridColumn: '2 / 9' }}>
          <h2 style={{
            fontSize: 88, lineHeight: 0.95, margin: 0, fontWeight: 500, letterSpacing: '-0.04em',
          }}>
            Vamos<br/>conversar.<br/>
            <a href="mailto:fabianoarthur47@gmail.com" style={{ color: '#c4302b', textDecoration: 'underline', textDecorationThickness: 3, textUnderlineOffset: 8 }}>fabianoarthur47@gmail.com</a>
          </h2>
        </div>
        <div style={{ gridColumn: '10 / 13', alignSelf: 'end' }}>
          <div style={mono}>github.com/zhyorg</div>
          <div style={mono}>linkedin.com/in/fabiano</div>
          <div style={{ ...mono, marginTop: 24, color: 'rgba(10,10,10,.5)' }}>São Paulo / Remote</div>
        </div>
      </div>

      <div style={{ ...grid, paddingBottom: 32, borderTop: '1px solid #0a0a0a', marginLeft: 0, marginRight: 0, paddingTop: 20 }}>
        <div style={{ gridColumn: '1 / 7', ...mono }}>© 2026 Fabiano Arthur — Last update 26.05.26</div>
        <div style={{ gridColumn: '7 / 13', ...mono, textAlign: 'right' }}>Set in Helvetica. No JavaScript was harmed.</div>
      </div>
    </div>
  );
}

window.V2Swiss = V2Swiss;
