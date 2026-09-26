import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import pick from "@/lib/pick";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { instrumentSerif, inter } from "@/app/fonts";
import { DocumentHead } from "@/components/DocumentHead";
import { routing } from "@/i18n/routing";
import { htmlLang, locales, ogLocale, type Locale } from "@/lib/locale";
import { siteUrl } from "@/lib/paths";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "metadata" });
  const url = `${siteUrl}/${locale}/`;

  return {
    metadataBase: new URL(`${siteUrl}/`),
    title: { default: t("title"), template: t("titleTemplate") },
    description: t("description"),
    applicationName: `${site.name} · Portfolio`,
    authors: [{ name: site.name, url: site.github }],
    creator: site.name,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [htmlLang[l], `${siteUrl}/${l}/`])),
        "x-default": `${siteUrl}/`,
      },
    },
    openGraph: {
      type: "website",
      url,
      locale: ogLocale[locale as Locale],
      siteName: `${site.name} · Portfolio`,
      title: t("title"),
      description: t("description"),
      images: [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630, alt: t("ogAlt") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${siteUrl}/opengraph-image.png`],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  // Only client components need messages in the browser; everything else is
  // rendered at build time. Keeps the inline payload small.
  const messages = pick(await getMessages(), ["themeToggle"]);

  return (
    <html
      lang={htmlLang[locale]}
      className={`${inter.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <DocumentHead />
      <body className="flex min-h-dvh flex-col font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
