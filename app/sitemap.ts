import type { MetadataRoute } from "next";
import { htmlLang, locales } from "@/lib/locale";
import { siteUrl } from "@/lib/paths";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}/`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `${siteUrl}/${l}/`])),
    },
  }));
}
