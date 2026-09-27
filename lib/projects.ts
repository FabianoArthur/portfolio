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
    repos: [{ label: "agent-control-room", url: gh("agent-control-room") }],
    demo: pages("agent-control-room"),
    tech: ["React", "TypeScript", "Vite"],
  },
  {
    id: "algorithms",
    kind: "app",
    repos: [{ label: "algorithm-visualizer", url: gh("algorithm-visualizer") }],
    demo: pages("algorithm-visualizer"),
    tech: ["TypeScript", "Vite", "Canvas"],
  },
  {
    id: "arcade",
    kind: "app",
    repos: [{ label: "canvas-arcade", url: gh("canvas-arcade") }],
    demo: pages("canvas-arcade"),
    tech: ["TypeScript", "Canvas", "Vite"],
  },
  {
    id: "regex",
    wide: true,
    kind: "app",
    repos: [{ label: "regex-playground", url: gh("regex-playground") }],
    demo: pages("regex-playground"),
    tech: ["TypeScript", "Vite", "Parsing"],
  },
  {
    id: "designSystem",
    wide: true,
    kind: "app",
    repos: [{ label: "brisa-design-system", url: gh("brisa-design-system") }],
    demo: pages("brisa-design-system"),
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
    demo: pages("barbearia-frontend"),
    tech: ["NestJS", "Prisma", "PostgreSQL", "React"],
  },
];
