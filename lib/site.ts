export const site = {
  name: "Fabiano Arthur",
  alias: "Zhyorg",
  email: "fabianoarthur47@gmail.com",
  github: "https://github.com/FabianoArthur",
  linkedin: "https://www.linkedin.com/in/fabiano-arthur-p-c-de-oliveira-30bb39215/",
  source: "https://github.com/FabianoArthur/portifolio",
} as const;

export const navLinks = [
  { key: "work", href: "#work" },
  { key: "about", href: "#about" },
  { key: "stack", href: "#stack" },
  { key: "contact", href: "#contact" },
] as const;

export type StackGroup = "languages" | "frontend" | "backend" | "data" | "ai";

export const stack: ReadonlyArray<{ group: StackGroup; items: readonly string[] }> = [
  { group: "languages", items: ["TypeScript", "Python", "Java", "SQL"] },
  { group: "frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS"] },
  { group: "backend", items: ["Node.js", "NestJS", "FastAPI", "Spring Boot"] },
  { group: "data", items: ["PostgreSQL", "MongoDB", "Docker", "GitHub Actions"] },
  { group: "ai", items: ["Claude Code", "Agent workflows", "MCP", "tmux"] },
];
