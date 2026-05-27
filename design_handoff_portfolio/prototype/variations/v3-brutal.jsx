// V3 — BRUTALIST / EXPERIMENTAL
// Think: raw HTML, monospace, hard borders, deliberate ugliness, terminal vibes.

function V3Brutal() {
  const wrap = {
    width: '100%', minHeight: '100%',
    background: '#e8e6df', color: '#000',
    fontFamily: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace',
    fontSize: 14, lineHeight: 1.4,
  };
  const box = { border: '2px solid #000', background: '#fff', padding: 18 };
  const tag = { display: 'inline-block', background: '#000', color: '#fff', padding: '2px 8px', fontSize: 11, letterSpacing: '.06em' };
  const bigBtn = {
    display: 'inline-block', border: '3px solid #000', background: '#ff4d1c', color: '#000',
    padding: '14px 22px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em',
    boxShadow: '6px 6px 0 #000', textDecoration: 'none',
  };

  return (
    <div style={wrap}>
      {/* TOP STRIP */}
      <div style={{ background: '#000', color: '#fff', padding: '8px 24px', display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '.06em' }}>
        <span>[ ZHYORG.SH v0.1.0-alpha ]</span>
        <span>STATUS: ONLINE · BUILDING · OPEN-FOR-WORK</span>
        <span>{`>`} cat about.md</span>
      </div>

      {/* HERO */}
      <div style={{ padding: 24, display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 24 }}>
        <div>
          <div style={tag}>I AM</div>
          <h1 style={{
            margin: '14px 0 0',
            fontFamily: '"Archivo Black", "Helvetica Neue", Helvetica, sans-serif',
            fontSize: 152, lineHeight: 0.9, letterSpacing: '-0.04em',
            textTransform: 'uppercase',
          }}>
            FABI<br/>ANO<br/>
            <span style={{
              background: '#ff4d1c', display: 'inline-block', padding: '0 14px',
              transform: 'rotate(-2deg)',
            }}>ARTHUR</span>
          </h1>
          <div style={{ marginTop: 18, fontSize: 18 }}>
            {`>`} also known as <span style={{ background: '#000', color: '#fff', padding: '2px 6px' }}>zhyorg</span>
          </div>
        </div>
        <div>
          <div style={{ ...box, marginBottom: 16 }}>
            <div style={tag}>WHAT</div>
            <p style={{ margin: '12px 0 0', fontSize: 16 }}>
              full-stack developer.<br/>
              code as material,<br/>
              constraint as feature.
            </p>
          </div>
          <div style={{ ...box, marginBottom: 16, background: '#fffd9c' }}>
            <div style={tag}>WHERE</div>
            <p style={{ margin: '12px 0 0', fontSize: 16 }}>Brasil 🇧🇷 / remote / globe</p>
          </div>
          <div style={{ ...box, background: '#000', color: '#fff', borderColor: '#000' }}>
            <div style={{ ...tag, background: '#fff', color: '#000' }}>STATUS</div>
            <p style={{ margin: '12px 0 0', fontSize: 16, fontFamily: 'inherit' }}>
              <span style={{ color: '#7CFF7C' }}>●</span> AVAILABLE FROM JUN 2026
            </p>
          </div>
        </div>
      </div>

      {/* ASCII DIVIDER */}
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', fontSize: 14, padding: '8px 24px', borderTop: '2px solid #000', borderBottom: '2px solid #000', background: '#000', color: '#fff' }}>
        {'/'.repeat(200)}
      </div>

      {/* ABOUT — terminal */}
      <div style={{ padding: 24 }}>
        <div style={{ ...box, background: '#0a0a0a', color: '#0fff60', borderColor: '#000', padding: 0 }}>
          <div style={{ display: 'flex', gap: 6, padding: '8px 12px', background: '#1a1a1a', borderBottom: '2px solid #000' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
            <span style={{ marginLeft: 12, color: '#999' }}>~/zhyorg/about.sh</span>
          </div>
          <pre style={{ margin: 0, padding: 20, fontSize: 14, lineHeight: 1.6, fontFamily: 'inherit', whiteSpace: 'pre-wrap' }}>
{`$ whoami
fabiano-arthur · full-stack engineer

$ cat manifesto.txt
> escrevo software para humanos, debugado por humanos.
> prefiro decisões simples a frameworks complicados.
> documentação é amor.
> o detalhe não é o detalhe — o detalhe é o trabalho.

$ ls skills/
typescript/  react/      next.js/    svelte/
node.js/     python/     go/         rust/
postgres/    redis/      docker/     linux/

$ uptime
> coding since 2022 · learning since always

$ _`}<span style={{ animation: 'blink 1s steps(2) infinite' }}>▊</span>
          </pre>
        </div>
        <style dangerouslySetInnerHTML={{ __html: '@keyframes blink{50%{opacity:0}}' }} />
      </div>

      {/* WORK GRID — heavy borders, varied bg */}
      <div style={{ padding: '0 24px 24px' }}>
        <h2 style={{
          fontFamily: '"Archivo Black", sans-serif', fontSize: 64,
          letterSpacing: '-0.02em', margin: '12px 0 16px', textTransform: 'uppercase',
        }}>{`>> SELECTED WORK <<`}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {[
            { n: '001', t: 'TBD', sub: 'project slot — open', bg: '#ff4d1c', color: '#000' },
            { n: '002', t: 'TBD', sub: 'project slot — open', bg: '#fffd9c', color: '#000' },
            { n: '003', t: 'TBD', sub: 'project slot — open', bg: '#7CFF7C', color: '#000' },
            { n: '004', t: 'TBD', sub: 'project slot — open', bg: '#000', color: '#fff' },
            { n: '005', t: 'TBD', sub: 'project slot — open', bg: '#fff', color: '#000' },
            { n: '006', t: 'TBD', sub: 'project slot — open', bg: '#9cb8ff', color: '#000' },
          ].map((p) => (
            <div key={p.n} style={{ border: '3px solid #000', background: p.bg, color: p.color, padding: 18, boxShadow: '6px 6px 0 #000' }}>
              <div style={{ fontSize: 11, letterSpacing: '.1em' }}>PROJECT {p.n}</div>
              <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 44, lineHeight: 1, margin: '10px 0' }}>{p.t}</div>
              <div style={{ fontSize: 13 }}>{p.sub}</div>
              <div style={{
                marginTop: 18, aspectRatio: '16/10',
                background: 'repeating-linear-gradient(45deg, transparent 0 8px, rgba(0,0,0,.18) 8px 9px)',
                border: '2px dashed currentColor',
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* MARQUEE */}
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', background: '#ff4d1c', borderTop: '3px solid #000', borderBottom: '3px solid #000', padding: '14px 0' }}>
        <div style={{
          display: 'inline-block',
          animation: 'mq 30s linear infinite',
          fontFamily: '"Archivo Black", sans-serif', fontSize: 36, letterSpacing: '-0.02em',
        }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} style={{ paddingRight: 40 }}>AVAILABLE FOR HIRE ★ AVAILABLE FOR HIRE ★ AVAILABLE FOR HIRE ★</span>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{ __html: '@keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}' }} />
      </div>

      {/* CONTACT */}
      <div style={{ padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ ...box, padding: 24, background: '#000', color: '#fff', borderColor: '#000' }}>
          <div style={{ fontSize: 11, letterSpacing: '.1em', color: '#fffd9c' }}>{`> ./contact --send`}</div>
          <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, margin: '12px 0 8px', lineHeight: 0.95 }}>SAY HI.</h3>
          <p style={{ margin: 0, fontSize: 14 }}>nenhum projeto é pequeno demais. nenhum bug é estranho demais.</p>
          <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="mailto:fabianoarthur47@gmail.com" style={bigBtn}>✉ FABIANOARTHUR47@GMAIL.COM →</a>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" style={{ ...bigBtn, background: '#25D366' }}>
              ▶ WHATSAPP / DM DIRETO →
            </a>
            <div style={{ fontSize: 11, letterSpacing: '.06em', color: '#fffd9c', marginTop: 4 }}>
              {`> resposta < 24h · seg-sex · BRT`}
            </div>
          </div>
        </div>
        <div style={{ ...box, padding: 24 }}>
          <div style={{ fontSize: 11, letterSpacing: '.1em' }}>{`> ./follow`}</div>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['github / @zhyorg', 'linkedin / fabiano-arthur', 'twitter / @zhyorg', 'whatsapp / +55 (XX) XXXXX-XXXX'].map((s) => (
              <div key={s} style={{
                border: '2px solid #000', padding: '12px 14px', display: 'flex', justifyContent: 'space-between',
                background: '#fffd9c',
              }}>
                <span>{s}</span><span>↗</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: '#000', color: '#fff', padding: '12px 24px', fontSize: 11, letterSpacing: '.06em', display: 'flex', justifyContent: 'space-between' }}>
        <span>EOF · © 2026 · NO COOKIES · NO TRACKING · NO BS</span>
        <span>BUILT WITH ❤ AND 0 FRAMEWORKS</span>
      </div>
    </div>
  );
}

window.V3Brutal = V3Brutal;
