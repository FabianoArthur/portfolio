import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { normalizeBasePath } from "./lib/paths";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// GitHub Pages serves a project site under /<repo>; the deploy workflow passes
// the path from actions/configure-pages. Empty locally.
const basePath = normalizeBasePath(process.env.PAGES_BASE_PATH);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  poweredByHeader: false,
  // Pin the project root: without it Next can pick a parent folder that has
  // its own lockfile (e.g. when this checkout is a nested git worktree).
  turbopack: { root: dirname(fileURLToPath(import.meta.url)) },
};

export default withNextIntl(nextConfig);
