#!/usr/bin/env node
// Generates the animated "how it works" diagrams used by the READMEs:
//   docs/assets/how-it-works{,.pt-BR}-{light,dark}.svg
// Pure SVG + CSS @keyframes (offset-path): no JS, no external fonts; the
// animation is removed under prefers-reduced-motion. Run: node scripts/build-diagram.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const W = 880;
const H = 470;
const BOX_W = 176;
const BOX_H = 100;
const XS = [34, 246, 458, 670];
const BUILD_Y = 58;
const VISIT_Y = 322;

const text = {
  en: {
    lang: "en",
    title: "How the portfolio is built and served",
    desc: "Build: on every push to main, the English and Portuguese copy and the project list go through next build as a static export; the Content-Security-Policy is injected and checked, lint, types, tests and a gitleaks secret scan run, and deploy-pages publishes plain HTML, CSS and JS to GitHub Pages. Visit: the root page picks English or Portuguese from the browser language, the chosen page sets the light or dark theme before first paint, and each project card links to its repository and live demo.",
    build: "Build · every push to main",
    visit: "Visit",
    serves: "serves",
    boxes: [
      ["Content", "messages/{en,pt}.json", "lib/projects.ts"],
      ["next build", "static export", "/en/ and /pt/ prerendered"],
      ["Gates", "CSP injected + checked", "lint · types · tests · gitleaks"],
      ["GitHub Pages", "actions/deploy-pages", "static files, no server"],
      ["Visitor", "browser language", "light or dark preference"],
      ["/", "picks en or pt", "no JS? plain links"],
      ["/en/ · /pt/", "theme set before paint", "reveal on scroll, a11y first"],
      ["Projects", "repos on GitHub", "live demos on Pages"],
    ],
  },
  pt: {
    lang: "pt-BR",
    title: "Como o portfólio é gerado e servido",
    desc: "Build: a cada push na main, os textos em inglês e português e a lista de projetos passam pelo next build como export estático; a Content-Security-Policy é injetada e conferida, rodam lint, tipos, testes e a varredura de segredos do gitleaks, e o deploy-pages publica HTML, CSS e JS puros no GitHub Pages. Visita: a página raiz escolhe inglês ou português pelo idioma do navegador, a página escolhida aplica o tema claro ou escuro antes da primeira pintura e cada card de projeto leva ao repositório e à demo.",
    build: "Build · a cada push na main",
    visit: "Visita",
    serves: "serve",
    boxes: [
      ["Conteúdo", "messages/{en,pt}.json", "lib/projects.ts"],
      ["next build", "export estático", "/en/ e /pt/ pré-renderizados"],
      ["Gates", "CSP injetada + conferida", "lint · tipos · testes · gitleaks"],
      ["GitHub Pages", "actions/deploy-pages", "só arquivos estáticos"],
      ["Visitante", "idioma do navegador", "preferência claro/escuro"],
      ["/", "escolhe en ou pt", "sem JS? links simples"],
      ["/en/ · /pt/", "tema antes da pintura", "revelação no scroll, a11y"],
      ["Projetos", "repositórios no GitHub", "demos no Pages"],
    ],
  },
};

const themes = {
  dark: {
    bg: "#0d1117", frame: "#30363d", card: "#161b22", cardStroke: "#3d444d",
    ink: "#e6edf3", dim: "#9198a1", label: "#b894ff", edge: "#6e7681",
    zone: "#11161d", accent: "#b894ff", code: "#6ad2ff",
  },
  light: {
    bg: "#ffffff", frame: "#d1d9e0", card: "#f6f8fa", cardStroke: "#d1d9e0",
    ink: "#1f2328", dim: "#59636e", label: "#6a3dd1", edge: "#818b98",
    zone: "#fbfbfc", accent: "#6a3dd1", code: "#0a6f96",
  },
};

const cx = (i) => XS[i] + BOX_W / 2;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Edges in the order the dot travels them.
const edges = [
  `M${XS[0] + BOX_W},${BUILD_Y + 50} H${XS[1]}`,
  `M${XS[1] + BOX_W},${BUILD_Y + 50} H${XS[2]}`,
  `M${XS[2] + BOX_W},${BUILD_Y + 50} H${XS[3]}`,
  `M${cx(3)},${BUILD_Y + BOX_H} V240 H${cx(0)} V${VISIT_Y}`,
  `M${XS[0] + BOX_W},${VISIT_Y + 50} H${XS[1]}`,
  `M${XS[1] + BOX_W},${VISIT_Y + 50} H${XS[2]}`,
  `M${XS[2] + BOX_W},${VISIT_Y + 50} H${XS[3]}`,
];
const lengths = [36, 36, 36, 96 + 636 + 82, 36, 36, 36];

function svg(locale, themeName) {
  const t = text[locale];
  const c = themes[themeName];
  const DUR = 10; // seconds per loop
  const total = lengths.reduce((a, b) => a + b, 0);
  const travel = 0.78; // share of the loop spent moving; the rest is a pause
  let start = 0;
  const keyframes = [];
  const dots = [];

  edges.forEach((d, i) => {
    const span = (lengths[i] / total) * travel * 100;
    const s = start;
    const e = start + span;
    start = e + 1.2;
    const p = (n) => `${Math.max(0, Math.min(100, n)).toFixed(2)}%`;
    keyframes.push(
      `@keyframes m${i}{0%,${p(s)}{offset-distance:0%;opacity:0}${p(s + 0.3)}{opacity:1}${p(e)}{offset-distance:100%;opacity:1}${p(e + 1.5)},100%{offset-distance:100%;opacity:0}}`,
      `@keyframes h${i}{0%,${p(s)}{opacity:0}${p(s + 0.3)},${p(e)}{opacity:.9}${p(e + 4)},100%{opacity:0}}`,
    );
    dots.push(
      `<path d="${d}" class="hl" style="animation-name:h${i}"/>`,
      `<g class="pk" style="offset-path:path('${d}');animation-name:m${i}"><circle r="9" class="halo"/><circle r="4.5" class="dot"/></g>`,
    );
  });

  const box = (i, x, y) => {
    const [title, l1, l2] = t.boxes[i];
    const mid = x + BOX_W / 2;
    return [
      `<rect x="${x}" y="${y}" width="${BOX_W}" height="${BOX_H}" rx="12" class="card"/>`,
      `<text x="${mid}" y="${y + 34}" class="b" text-anchor="middle">${esc(title)}</text>`,
      `<text x="${mid}" y="${y + 60}" class="${i === 0 ? "code" : "m"}" text-anchor="middle">${esc(l1)}</text>`,
      `<text x="${mid}" y="${y + 80}" class="${i === 0 ? "code" : "m"}" text-anchor="middle">${esc(l2)}</text>`,
    ].join("\n");
  };

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-labelledby="title desc" lang="${t.lang}">
<title id="title">${esc(t.title)}</title>
<desc id="desc">${esc(t.desc)}</desc>
<style>
text{font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;fill:${c.ink}}
.b{font-size:15px;font-weight:600}
.m{font-size:12.5px;fill:${c.dim}}
.code{font-family:ui-monospace,SFMono-Regular,"SF Mono",Menlo,Consolas,"Liberation Mono",monospace;font-size:11.5px;fill:${c.code}}
.h{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;fill:${c.label}}
.s{font-size:12px;fill:${c.dim};font-style:italic}
.bg{fill:${c.bg};stroke:${c.frame}}
.zone{fill:${c.zone};stroke:${c.frame};stroke-dasharray:4 4}
.card{fill:${c.card};stroke:${c.cardStroke}}
.e{fill:none;stroke:${c.edge};stroke-width:1.5;stroke-linejoin:round}
.dot{fill:${c.accent}}
.halo{fill:${c.accent};opacity:.25}
.hl{fill:none;stroke:${c.accent};stroke-width:2;stroke-linejoin:round;opacity:0;animation:${DUR}s linear infinite}
.pk{opacity:0;offset-rotate:0deg;animation:${DUR}s cubic-bezier(.45,0,.55,1) infinite}
${keyframes.join("\n")}
@media (prefers-reduced-motion:reduce){.pk,.hl{display:none;animation:none}}
</style>
<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="${c.edge}"/></marker></defs>
<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="16" class="bg"/>
<rect x="18" y="18" width="${W - 36}" height="${BUILD_Y + BOX_H + 18 - 18}" rx="12" class="zone"/>
<text x="34" y="44" class="h">${esc(t.build)}</text>
<rect x="18" y="${VISIT_Y - 40}" width="${W - 36}" height="${BOX_H + 58}" rx="12" class="zone"/>
<text x="34" y="${VISIT_Y - 16}" class="h">${esc(t.visit)}</text>
${edges.map((d) => `<path d="${d}" class="e" marker-end="url(#ah)"/>`).join("\n")}
<text x="${(cx(0) + cx(3)) / 2}" y="232" class="s" text-anchor="middle">${esc(t.serves)}</text>
${[0, 1, 2, 3].map((i) => box(i, XS[i], BUILD_Y)).join("\n")}
${[4, 5, 6, 7].map((i) => box(i, XS[i - 4], VISIT_Y)).join("\n")}
${dots.join("\n")}
</svg>
`;
}

mkdirSync("docs/assets", { recursive: true });
for (const locale of ["en", "pt"]) {
  for (const theme of ["light", "dark"]) {
    const name = `docs/assets/how-it-works${locale === "pt" ? ".pt-BR" : ""}-${theme}.svg`;
    writeFileSync(name, svg(locale, theme));
    console.log(`wrote ${name}`);
  }
}
