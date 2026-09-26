export function normalizeBasePath(raw: string | undefined): string {
  const trimmed = (raw ?? "").trim().replace(/\/+$/, "");
  if (!trimmed) return "";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export function withBasePath(path: string, basePath: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${p}`;
}

/** Base path the site is served under (e.g. "/portifolio" on GitHub Pages). */
export const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

/** Public origin; the full site URL is always origin + base path, so they can't drift. */
export const siteOrigin = (
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://fabianoarthur.github.io"
).replace(/\/+$/, "");

export const siteUrl = `${siteOrigin}${basePath}`;
