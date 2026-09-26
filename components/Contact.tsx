import { useTranslations } from "next-intl";
import { site } from "@/lib/site";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import { Section } from "./Section";

export function Contact() {
  const t = useTranslations("contact");
  const tA11y = useTranslations("a11y");

  const channels = [
    { key: "email", href: `mailto:${site.email}`, value: site.email, Icon: MailIcon, external: false },
    { key: "github", href: site.github, value: "FabianoArthur", Icon: GitHubIcon, external: true },
    { key: "linkedin", href: site.linkedin, value: "Fabiano Arthur", Icon: LinkedInIcon, external: true },
  ] as const;

  return (
    <Section id="contact" eyebrow={t("eyebrow")} title={t("title")} intro={t("body")}>
      <ul className="grid gap-3 md:grid-cols-3">
        {channels.map(({ key, href, value, Icon, external }, i) => (
          <li key={key} data-reveal style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong hover:bg-surface-hover"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line text-accent">
                <Icon />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs uppercase tracking-[0.14em] text-dim">{t(key)}</span>
                <span className="mt-0.5 block truncate font-medium">{value}</span>
              </span>
              <ArrowUpRightIcon className="text-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              {external ? <span className="sr-only"> {tA11y("externalLink")}</span> : null}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
