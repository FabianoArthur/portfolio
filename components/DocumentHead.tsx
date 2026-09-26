import { themeInitScript } from "@/lib/theme";

/** The theme script runs before first paint. The CSP <meta> is not rendered
 * here: React hoists Next's script tags above it, so scripts/postbuild.mjs
 * injects it right after <meta charset> instead. */
export function DocumentHead() {
  return (
    // App Router: a plain <head> in the layout is correct; next/head is Pages Router only.
    // eslint-disable-next-line @next/next/no-head-element
    <head>
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
    </head>
  );
}
