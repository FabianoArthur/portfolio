// V1 — EDITORIAL / MAGAZINE
// Think: Kinfolk × NYT Magazine. Big serif, columns, marginalia, drop caps.

function V1Editorial() {
  const wrap = {
    width: '100%', minHeight: '100%',
    background: '#f5f1ea', color: '#1a1612',
    fontFamily: '"Spectral", "Times New Roman", Georgia, serif',
    fontFeatureSettings: '"liga","kern","onum"',
  };
  const issueRule = { borderTop: '1px solid #1a1612', borderBottom: '1px solid #1a1612' };
  const mono = { fontFamily: '"JetBrains Mono", ui-monospace, monospace', letterSpacing: '.06em', textTransform: 'uppercase', fontSize: 11 };
  const colRule = { borderRight: '1px solid rgba(26,22,18,.18)' };

  return (
    <div style={wrap}>
      {/* MASTHEAD */}
      <div style={{ ...issueRule, padding: '14px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={mono}>Vol. 01 · Issue 01</div>
        <div style={mono}>Maio · MMXXVI</div>
        <div style={mono}>R$ 0,00 / Free</div>
      </div>

      {/* TITLE BLOCK */}
      <div style={{ padding: '64px 56px 28px', textAlign: 'center' }}>
        <div style={{ ...mono, marginBottom: 28 }}>— Independent Quarterly of Full-Stack Engineering —</div>
        <h1 style={{
          fontFamily: '"Playfair Display", "Times New Roman", serif',
          fontSize: 168, fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.04em',
          margin: 0, fontStyle: 'italic',
        }}>Fabiano<br/><span style={{ fontStyle: 'normal', WebkitTextStroke: '2px #1a1612', color: 'transparent' }}>Arthur</span></h1>
        <div style={{ ...mono, marginTop: 28 }}>aka <span style={{ borderBottom: '1px solid #1a1612', paddingBottom: 2 }}>Zhyorg</span> · Full-Stack Developer · Brasil</div>
      </div>

      {/* HERO IMAGE PLACEHOLDER */}
      <div style={{ padding: '0 56px 32px' }}>
        <div style={{
          height: 360, border: '1px solid #1a1612',
          background: 'repeating-linear-gradient(45deg, transparent 0 12px, rgba(26,22,18,.06) 12px 13px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          ...mono, color: 'rgba(26,22,18,.55)',
        }}>[ portrait · 16:9 · drop image here ]</div>
        <div style={{ ...mono, marginTop: 10, color: 'rgba(26,22,18,.55)' }}>
          Fig. 01 — O autor em seu habitat natural, observado em maio de 2026.
        </div>
      </div>

      {/* THREE-COLUMN BODY */}
      <div style={{ ...issueRule, margin: '24px 56px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '40px 0' }}>
        <div style={{ ...colRule, padding: '0 28px' }}>
          <div style={{ ...mono, marginBottom: 12 }}>Chapter I</div>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, lineHeight: 1.1, margin: '0 0 14px', fontStyle: 'italic' }}>On the matter of building things.</h3>
          <p style={{ fontSize: 15, lineHeight: 1.55, margin: 0, textAlign: 'justify', hyphens: 'auto' }}>
            <span style={{ float: 'left', fontFamily: '"Playfair Display", serif', fontSize: 64, lineHeight: 0.85, paddingRight: 8, paddingTop: 4, fontStyle: 'italic' }}>D</span>
            esenvolvedor full-stack que entende código como ofício — uma prática paciente, repetida, recompensadora. Trabalho na interseção entre interface e infraestrutura, com igual atenção ao detalhe de um botão e à arquitetura de um sistema.
          </p>
        </div>
        <div style={{ ...colRule, padding: '0 28px' }}>
          <div style={{ ...mono, marginBottom: 12 }}>Chapter II</div>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, lineHeight: 1.1, margin: '0 0 14px', fontStyle: 'italic' }}>The stack, examined.</h3>
          <p style={{ fontSize: 15, lineHeight: 1.55, margin: 0, textAlign: 'justify', hyphens: 'auto' }}>
            TypeScript no front (React, Next.js, Svelte). Node, Python e Go no back. Postgres como confidente, Redis como ajudante. Docker, Linux, CI/CD por instinto. Acredito em ferramentas afiadas, escolhidas com cuidado e usadas com profundidade.
          </p>
        </div>
        <div style={{ padding: '0 28px' }}>
          <div style={{ ...mono, marginBottom: 12 }}>Chapter III</div>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, lineHeight: 1.1, margin: '0 0 14px', fontStyle: 'italic' }}>A note to the reader.</h3>
          <p style={{ fontSize: 15, lineHeight: 1.55, margin: 0, textAlign: 'justify', hyphens: 'auto' }}>
            Esta é a primeira edição. As páginas seguintes guardam espaço para os projetos que virão — uma cadeira reservada na mesa. Se você gostaria de ocupá-la, escreva. A porta está aberta, o café, fresco.
          </p>
        </div>
      </div>

      {/* PULL QUOTE */}
      <div style={{ padding: '56px 140px', textAlign: 'center', ...issueRule, margin: '0 56px' }}>
        <div style={{ ...mono, marginBottom: 16 }}>— A Maxim —</div>
        <p style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontSize: 44, lineHeight: 1.15, margin: 0, letterSpacing: '-0.01em',
        }}>“Software well-made is software that <span style={{ textDecoration: 'underline', textUnderlineOffset: 6 }}>stays out of the way</span> of the person using it.”</p>
        <div style={{ ...mono, marginTop: 18 }}>— Z., 2026</div>
      </div>

      {/* SELECTED WORK */}
      <div style={{ padding: '56px 56px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid #1a1612', paddingBottom: 14, marginBottom: 24 }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 56, margin: 0, fontStyle: 'italic', fontWeight: 400 }}>Selected Works</h2>
          <div style={mono}>§ Forthcoming</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            ['No. 001', 'Untitled (in progress)', 'Web · TypeScript · React'],
            ['No. 002', 'Untitled (forthcoming)', 'Backend · Node · Postgres'],
            ['No. 003', 'Reserved', 'Open for commission'],
            ['No. 004', 'Reserved', 'Open for commission'],
          ].map(([num, title, kind], i) => (
            <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: '18px 0', borderBottom: '1px solid rgba(26,22,18,.18)' }}>
              <div style={{
                width: 110, height: 110, flex: '0 0 110px',
                background: 'repeating-linear-gradient(135deg, transparent 0 8px, rgba(26,22,18,.08) 8px 9px)',
                border: '1px solid rgba(26,22,18,.4)',
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ ...mono, color: 'rgba(26,22,18,.55)' }}>{num}</div>
                <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: 24, fontStyle: 'italic', margin: '6px 0 6px' }}>{title}</h4>
                <div style={{ ...mono }}>{kind}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COLOPHON / CONTACT */}
      <div style={{ ...issueRule, margin: '32px 56px 0', padding: '32px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', textAlign: 'center' }}>
        <div>
          <div style={mono}>Correspondence</div>
          <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 22, fontStyle: 'italic', marginTop: 6 }}>fabianoarthur47@gmail.com</div>
        </div>
        <div style={{ ...colRule, borderLeft: '1px solid rgba(26,22,18,.18)', borderRight: '1px solid rgba(26,22,18,.18)' }}>
          <div style={mono}>Atelier</div>
          <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 22, fontStyle: 'italic', marginTop: 6 }}>Disponível para projetos</div>
        </div>
        <div>
          <div style={mono}>Find me</div>
          <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 22, fontStyle: 'italic', marginTop: 6 }}>github · linkedin</div>
        </div>
      </div>

      <div style={{ padding: '24px 56px 40px', textAlign: 'center', ...mono, color: 'rgba(26,22,18,.55)' }}>
        — Printed in Brazil · No bots were harmed in the making of this site —
      </div>
    </div>
  );
}

window.V1Editorial = V1Editorial;
