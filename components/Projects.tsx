import { useTranslations } from "next-intl";
import { projects, type Project } from "@/lib/projects";
import { ArrowUpRightIcon, GitHubIcon } from "./Icons";
import { Section } from "./Section";

export function Projects() {
  const t = useTranslations("projects");

  return (
    <Section id="work" eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </ul>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useTranslations("projects");
  const tA11y = useTranslations("a11y");
  const title = t(`items.${project.id}.title`);
  const titleId = `project-${project.id}`;

  return (
    <li
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 60}ms` } as React.CSSProperties}
      className={`${project.wide ? "lg:col-span-3" : "lg:col-span-2"} ${index === projects.length - 1 && projects.length % 2 ? "sm:col-span-2 lg:col-span-3" : ""}`}
    >
      <article
        aria-labelledby={titleId}
        className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong hover:bg-surface-hover"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{t(`kinds.${project.kind}`)}</p>
        <h3 id={titleId} className="mt-3 text-xl font-semibold tracking-[-0.015em]">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-dim">{t(`items.${project.id}.description`)}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={t("techLabel")}>
          {project.tech.map((tech) => (
            <li key={tech} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-dim">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
          {project.repos.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-line px-3 text-sm transition-colors hover:border-line-strong hover:bg-surface-hover"
            >
              <GitHubIcon width={16} height={16} />
              {project.repos.length > 1 ? repo.label : t("code")}
              <span className="sr-only">
                {" "}
                — {t("codeFor", { project: project.repos.length > 1 ? repo.label : title })} {tA11y("externalLink")}
              </span>
            </a>
          ))}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-accent px-3 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              {t("demo")}
              <ArrowUpRightIcon />
              <span className="sr-only">
                {" "}
                — {t("demoFor", { project: title })} {tA11y("externalLink")}
              </span>
            </a>
          ) : null}
        </div>
      </article>
    </li>
  );
}
