import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/paths";

// Crawlers only read robots.txt at the origin root, so on a GitHub Pages
// project site this file is informational; it matters on a custom domain.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
