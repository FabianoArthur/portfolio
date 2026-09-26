/**
 * Featured projects. Copy (title, description, highlights) lives in
 * messages/<locale>.json under `projects.items.<id>`.
 *
 * Links use each repo's current name. GitHub redirects renamed repos, but
 * GitHub Pages URLs do not follow a rename — update `demo` when one changes.
 */
export type ProjectId =
  | "kitchen"
  | "discordHq"
  | "controlRoom"
  | "algorithms"
  | "arcade"
  | "regex"
  | "designSystem"
  | "parking"
  | "barbershop";

export type ProjectKind = "tooling" | "app" | "api";

export type Project = {
  id: ProjectId;
  kind: ProjectKind;
  repos: ReadonlyArray<{ label: string; url: string }>;
  demo?: string;
  tech: readonly string[];
  /** Half-row card on wide screens (the others take a third). */
  wide?: boolean;
};

const gh = (repo: string) => `https://github.com/FabianoArthur/${repo}`;
const pages = (repo: string) => `https://fabianoarthur.github.io/${repo}/`;

export const projects: readonly Project[] = [
  {
    id: "kitchen",
    kind: "tooling",
    wide: true,
    repos: [{ label: "claude-code-kitchen", url: gh("claude-code-kitchen") }],
    tech: ["Claude Code", "Python", "tmux", "git worktrees"],
  },
  {
    id: "discordHq",
    kind: "tooling",
    wide: true,
    repos: [{ label: "claude-code-discord-hq", url: gh("claude-code-discord-hq") }],
    tech: ["Python", "Discord API", "Claude Code hooks", "TOML"],
  },
  {
    id: "controlRoom",
    kind: "app",
    repos: [{ label: "Calculadora", url: gh("Calculadora") }],
    demo: pages("Calculadora"),
    tech: ["React", "TypeScript", "Vite"],
  },
  {
    id: "algorithms",
    kind: "app",
    repos: [{ label: "atividades-2", url: gh("atividades-2") }],
    demo: pages("atividades-2"),
    tech: ["TypeScript", "Vite", "Canvas"],
  },
  {
    id: "arcade",
    kind: "app",
    repos: [{ label: "atividades3", url: gh("atividades3") }],
    demo: pages("atividades3"),
    tech: ["TypeScript", "Canvas", "Vite"],
  },
  {
    id: "regex",
    wide: true,
    kind: "app",
    repos: [{ label: "aula-1", url: gh("aula-1") }],
    demo: pages("aula-1"),
    tech: ["TypeScript", "Vite", "Parsing"],
  },
  {
    id: "designSystem",
    wide: true,
    kind: "app",
    repos: [{ label: "teste-claude-design", url: gh("teste-claude-design") }],
    demo: pages("teste-claude-design"),
    tech: ["React", "TypeScript", "CSS tokens", "Vitest"],
  },
  {
    id: "parking",
    wide: true,
    kind: "api",
    repos: [{ label: "parking-control", url: gh("parking-control") }],
    tech: ["Java 21", "Spring Boot 3", "PostgreSQL", "OpenAPI"],
  },
  {
    id: "barbershop",
    wide: true,
    kind: "api",
    repos: [
      { label: "barbearia-backend", url: gh("barbearia-backend") },
      { label: "barbearia-frontend", url: gh("barbearia-frontend") },
    ],
    tech: ["NestJS", "Prisma", "PostgreSQL", "React"],
  },
];
