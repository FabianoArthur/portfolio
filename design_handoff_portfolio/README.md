# Handoff: Portfólio Fabiano Arthur (Zhyorg)

> Pacote de entrega para implementar o portfólio em um codebase real e fazer deploy na web.

---

## 📦 O que tem aqui

```
design_handoff_portfolio/
├── README.md              ← você está aqui
└── prototype/
    ├── index.html          ← hub navegável (4 cards)
    ├── v3-brutalist.html   ← Direção 1 (terminal/raw)
    ├── v4-dark.html        ← Direção 2 (dark premium)
    ├── v5-vibrant.html     ← Direção 3 (playful pro)
    ├── v6-retro.html       ← Direção 4 (manual 1976)
    ├── canvas-overview.html ← visão de todas as 6 variações no canvas
    ├── design-canvas.jsx   ← componente do canvas (não vai pra produção)
    ├── standalone-shell.jsx ← chrome compartilhado (switcher flutuante)
    └── variations/
        ├── v1-editorial.jsx
        ├── v2-swiss.jsx
        ├── v3-brutal.jsx
        ├── v4-dark.jsx
        ├── v5-vibrant.jsx
        └── v6-retro.jsx
```

---

## ⚠️ Sobre os arquivos de design

Os HTMLs e JSXs deste pacote são **referências de design** — protótipos navegáveis que mostram exatamente como o portfólio deve **parecer** e **se comportar**. Eles usam React via CDN + Babel runtime, o que é ótimo para protótipo, mas **não é produção**.

A sua tarefa, com Claude Code, é **recriar esses designs em um projeto real**, usando um framework moderno (Next.js recomendado) com build, otimização de fontes, SEO, e deploy.

**Não tente apenas hospedar os HTMLs como estão.** O Babel rodando no browser deixa a página lenta e impede otimizações.

---

## 🎯 Fidelidade

**Alta fidelidade (hi-fi).** Os protótipos têm:
- Cores finais (hex exatos no documento)
- Tipografia final (famílias + pesos via Google Fonts)
- Espaçamentos finais (já em px)
- Hover states e microinterações começadas
- Copy em PT-BR final

O desenvolvedor deve recriar **pixel-perfect**, ajustando só o que for natural pro framework escolhido.

---

## 🏁 Começo recomendado (resumido)

```bash
# 1. Crie um Next.js novo
npx create-next-app@latest portifolio --typescript --tailwind --app --eslint

# 2. Entre na pasta
cd portifolio

# 3. Cole esse handoff dentro do projeto como referência
# (pasta design_handoff_portfolio/ inteira)

# 4. Abra o Claude Code
claude

# 5. Use o prompt sugerido na seção "Prompt para Claude Code" abaixo
```

---

## 🧭 As 4 direções de design

Você pode **escolher uma**, ou **mesclar elementos** entre elas (ex: cor do V5 + tipografia do V4). O ideal é começar por uma e iterar.

### V3 · Brutalist — Terminal & ASCII
- **Mood:** desenvolvedor que ama o terminal, declaração técnica direta, sem floreio
- **Quando usar:** se a audiência é técnica (recrutadores de eng., founders de startup de produto)
- **Risco:** alto — pode afastar audiência corporativa tradicional

### V4 · Dark Elegant — Premium Noir
- **Mood:** Linear / Vercel / Stripe. Confiança técnica com luxo discreto
- **Quando usar:** se quer parecer "senior" e "premium" sem esforço
- **Risco:** baixo — quase impossível errar

### V5 · Vibrant — Playful Profissional
- **Mood:** Figma / Stripe Sessions. Otimismo + rigor
- **Quando usar:** se vai mirar startups, agências, clientes de produto
- **Risco:** médio — pode parecer "infantil" pra cliente corporativo

### V6 · Retro — Manual de Computador 1976
- **Mood:** afeto pela história do ofício, computação dos anos 70-80
- **Quando usar:** se quer ser memorável, conectar com geeks/nostálgicos
- **Risco:** médio — fortemente estilizado, não combina com qualquer marca

> **Recomendação:** Se for sua primeira versão pública, o **V4 (Dark Elegant)** tem o melhor custo-benefício: parece profissional pra qualquer audiência e ainda mostra cuidado de design.

---

## 🧩 Estrutura de seções (igual em todas as 4)

Todas as variações seguem essa estrutura. Use isso como base do roteamento/componentização:

1. **Nav / topbar** — logo + links + indicador "disponível pra projetos"
2. **Hero** — nome + tagline + 1-2 CTAs principais
3. **About / manifesto** — quem é, filosofia, abordagem
4. **Selected Work** — 4 cards de projeto (3 "em construção" + 1 "vaga aberta")
5. **Stack** — tecnologias agrupadas (frontend, backend, infra)
6. **Stats** — números curtos (4 anos, 12+ frameworks, ∞ cafés) — *só no V4*
7. **Contact** — email + WhatsApp + canais sociais
8. **Footer** — copyright + canais

---

## 🎨 Design Tokens

Tokens compartilhados entre todas as direções:

### Tipografia
| Família | Onde | Pesos |
|---|---|---|
| `Instrument Serif` | Hero italic V4, Hub | 400 (regular + italic) |
| `Inter` | Body V4 e V5, Hub | 400, 500, 600, 700 |
| `JetBrains Mono` | V3 (toda), eyebrows | 400, 600 |
| `IBM Plex Mono` | V3 fallback | 400, 600 |
| `Archivo Black` | V3 títulos | 900 |
| `DM Serif Display` | V6 títulos | 400 + italic |
| `VT323` | V6 monospace (CRT vibe) | 400 |
| `Playfair Display` | V1 (não usado nas 4 escolhidas) | 400, 700, 900 + italic |

### Paletas (uma por direção)

**V3 Brutalist**
```
--ink:    #000000
--cream:  #e8e6df
--orange: #ff4d1c
--yellow: #fffd9c
--green:  #7CFF7C
--blue:   #9cb8ff
```

**V4 Dark Elegant**
```
--bg:     #0a0a0c
--ink:    #e8e6e3
--purple: #b48cff   (accent principal)
--cyan:   #6ad2ff   (accent secundário)
--green:  #7CFF9C   (status "disponível")
--dim:    rgba(232,230,227,.55)
```

**V5 Vibrant**
```
--ink:    #1c1410
--cream:  #fff7ea
--orange: #ff5b1f
--yellow: #ffd34e
--pink:   #ff5fa2
--purple: #7a52f5
--blue:   #2a6fdb
--green:  #1f8a5b
```

**V6 Retro**
```
--cream:    #f0e5cf
--paper:    #e8d9b8
--ink:      #3a1f0d
--orange:   #d4501e
--rust:     #8b3a0a
--teal:     #2d6b6b
--mustard:  #c79a2a
```

### Espaçamentos
Sistema simples baseado em múltiplos de 4:
`4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 100, 120, 160`px

### Border-radius
- V3: `0` (brutalist), botões `0`, cards `0` com shadow offset `6px 6px 0 #000`
- V4: `10px` (botões), `14px` (cards)
- V5: `999px` (pills), `28px` (cards grandes), `32px` (CTA box)
- V6: `0` ou `4px` (computer-era), bordas duplas/dashed

### Sombras
- V3: `6px 6px 0 #000` (offset duro)
- V4: `0 12px 30px -10px rgba(255,255,255,.2)` (glow sutil)
- V5: nenhuma; uso de cor sólida em cards
- V6: `8px 8px 0 #orange`, `10px 10px 0 #teal` (offset duro)

---

## 📋 Conteúdo / Copy final

```
Nome:        Fabiano Arthur
Pseudônimo:  Zhyorg
Função:      Desenvolvedor Full-stack
Localização: Brasil / São Paulo / remote
Email:       fabianoarthur47@gmail.com
WhatsApp:    +55 (XX) XXXXX-XXXX  ← SUBSTITUIR pelo número real
Disponível:  Junho 2026 →
Experiência: 4 anos (since 2022)
```

**Importante:** atualize o número de WhatsApp em todos os arquivos. Link atual usa `https://wa.me/5500000000000` (placeholder).

---

## 🛠️ Stack recomendado para implementação

| Camada | Sugestão | Por quê |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | SSR/SSG, otimização de fontes, imagem, deploy fácil |
| Estilo | **Tailwind CSS** + CSS modules pros tokens | Compatível com classes que já estão nos JSX |
| Tipografia | `next/font/google` | Carrega só os pesos usados, evita FOIT |
| Animações | **Framer Motion** | Hover states e scroll reveals que faltam |
| Ícones | **Lucide React** | Já é o padrão de mercado |
| Forms | **react-hook-form + zod** | Pro formulário de contato, se for criar |
| Deploy | **Vercel** | Free tier, deploy em 1 click do GitHub |
| Domínio | Custom domain via Vercel | `zhyorg.dev` ou `fabianoarthur.com` |

---

## 📐 Estrutura de pastas sugerida (Next.js App Router)

```
portifolio/
├── app/
│   ├── layout.tsx           ← fonts + metadata global
│   ├── page.tsx             ← landing principal (escolha 1 variação)
│   └── globals.css
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── SelectedWork.tsx
│   ├── ProjectCard.tsx
│   ├── Stack.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   ├── projects.ts          ← array dos seus projetos (quando tiver)
│   └── stack.ts             ← lista de tecnologias
├── public/
│   ├── og-image.png         ← preview pra redes sociais
│   └── favicon.ico
└── tailwind.config.ts       ← cole as paletas aqui como theme.extend.colors
```

---

## 🚀 Passo-a-passo para deploy

1. **Inicialize o projeto**
   ```bash
   npx create-next-app@latest portifolio --typescript --tailwind --app
   cd portifolio
   ```

2. **Suba pro GitHub**
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   gh repo create portifolio --public --source=. --push
   ```

3. **Implemente com Claude Code** (veja seção abaixo)

4. **Configure as fontes** em `app/layout.tsx`
   ```tsx
   import { Inter, Instrument_Serif } from 'next/font/google';
   const inter = Inter({ subsets: ['latin'] });
   const serif = Instrument_Serif({ subsets: ['latin'], weight: '400' });
   ```

5. **Deploy na Vercel**
   - Vá em [vercel.com/new](https://vercel.com/new)
   - Importe o repo do GitHub
   - Clique em "Deploy"
   - Pronto: você tem uma URL `portifolio-xxx.vercel.app` em ~1 min

6. **Conecte um domínio próprio** (opcional)
   - Compre um domínio (Namecheap, Registro.br, Cloudflare)
   - Em Vercel → Settings → Domains → adicione
   - Configure os DNS conforme instruções da Vercel

---

## 🤖 Prompt sugerido para Claude Code

Cole isso no Claude Code quando começar:

```
Tenho um pacote de design em design_handoff_portfolio/ com 4 direções
de landing page para meu portfólio. Quero implementar a direção V4
(Dark Elegant) primeiro.

Por favor:

1. Leia design_handoff_portfolio/README.md para entender o contexto
2. Leia design_handoff_portfolio/prototype/variations/v4-dark.jsx para
   ver o design exato
3. Recrie esse design em components/ usando React + Tailwind, quebrado
   em componentes lógicos (Nav, Hero, About, SelectedWork, Stack,
   Contact, Footer)
4. Configure next/font para as famílias Inter e Instrument Serif
5. Adicione as cores da paleta V4 em tailwind.config.ts como tokens
   nomeados (bg-ink, text-purple, etc.)
6. Use Framer Motion para adicionar:
   - Fade-in dos blocos no scroll (intersection observer)
   - Hover sutil nos cards de projeto (translateY + glow)
7. Implemente a página em app/page.tsx
8. Adicione metadata + OG image básica em app/layout.tsx

Quando terminar, rode `npm run dev` e mostre a URL local.
```

---

## ✅ Checklist antes do deploy

- [ ] Substituir todos os `+55 (XX) XXXXX-XXXX` pelo número real
- [ ] Substituir `wa.me/5500000000000` pelo link real do WhatsApp
- [ ] Verificar email `fabianoarthur47@gmail.com` em todos os lugares
- [ ] Adicionar links reais para GitHub, LinkedIn, Twitter
- [ ] Adicionar projetos reais quando tiver (substituir os "open slots")
- [ ] Adicionar `og-image.png` (1200x630) na `/public`
- [ ] Configurar `metadata` no `app/layout.tsx` (title, description, og)
- [ ] Adicionar `robots.txt` e `sitemap.ts`
- [ ] Testar em mobile (as direções foram desenhadas em 1280-1440px;
      precisam de breakpoints)
- [ ] Lighthouse score > 90 em Performance/SEO/Accessibility

---

## 📱 Sobre responsividade

Os protótipos foram desenhados para **desktop primeiro** (1280-1440px). Quando portar:

- **Hero:** fontes gigantes (`152px`, `136px`) precisam reduzir pra ~`64-80px` em mobile
- **Grids 2-4 colunas** viram 1 coluna em mobile (`@media (max-width: 768px)`)
- **Paddings horizontais** (`56px`, `64px`) reduzem pra `24px` em mobile
- **Nav** vira hamburger menu em mobile

O hub (`index.html`) já tem um breakpoint em `820px` — siga o mesmo padrão.

---

## 🎬 Ideias de microinterações que valem implementar

(Que não estão no protótipo mas elevam a percepção do site)

1. **Scroll reveals** — cada seção entra com fade + translateY ao aparecer
2. **Hover nos cards de projeto** — `translateY(-4px)` + glow do accent
3. **Cursor customizado** (no V3 e V6) — caractere mono piscando
4. **Magnetic buttons** — CTAs que "puxam" o cursor ao chegar perto
5. **Theme toggle dark/light** — só faz sentido se misturar V4+V5
6. **Marquee infinito** — V3 já tem; pode ter no V5 também
7. **Easter egg no console** — `console.log('👋 hello!')` quando abrir DevTools

---

## ❓ Dúvidas comuns

**"Posso só fazer upload dos HTMLs num servidor?"**
Tecnicamente sim, mas: Babel no browser deixa carregamento lento (~3s), não há otimização de imagem/font, e SEO é prejudicado. Vai funcionar mal em mobile. Recomendo fortemente portar pra Next.js.

**"Preciso usar Tailwind?"**
Não — pode usar CSS Modules, vanilla CSS, ou Styled Components. Tailwind é só recomendação por velocidade.

**"E se eu quiser misturar 2 direções?"**
Faça! Por exemplo, layout do V4 + paleta vibrante do V5 = "dark + acentos coloridos vivos". O Claude Code consegue fazer essa fusão se você descrever bem.

**"Onde hospedo o domínio?"**
Vercel inclui certificado SSL grátis. Compre o domínio onde quiser; só aponte o DNS pra Vercel.

---

## 🔗 Recursos

- Next.js docs → https://nextjs.org/docs
- Tailwind docs → https://tailwindcss.com/docs
- Framer Motion → https://www.framer.com/motion/
- Vercel deploy → https://vercel.com/docs/deployments/overview
- Google Fonts (usadas) → https://fonts.google.com/
