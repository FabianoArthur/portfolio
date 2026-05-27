import type { MetadataRoute } from "next";

const baseUrl = "https://zhyorg.dev";
const locales = ["pt", "en", "es", "zh"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // V4 routes (per-locale)
  const v4: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l === "pt" ? "pt-BR" : l, `${baseUrl}/${l}`]),
      ),
    },
  }));

  // Standalone variations
  const variations: MetadataRoute.Sitemap = ["brutalist", "vibrant", "retro"].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...v4, ...variations];
}
