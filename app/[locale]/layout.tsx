import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/lib/site";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://zhyorg.dev";

const ogLocale: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
  zh: "zh_CN",
};

const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  zh: "zh-CN",
};

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

  return {
    metadataBase: new URL(siteUrl),
    title: { default: t("title"), template: t("titleTemplate") },
    description: t("description"),
    applicationName: "Zhyorg · Portfolio",
    authors: [{ name: "Fabiano Arthur", url: siteUrl }],
    creator: "Fabiano Arthur",
    keywords: [
      "Fabiano Arthur",
      "Zhyorg",
      "full-stack",
      "Next.js",
      "TypeScript",
      "React",
      "portfolio",
      "Brasília",
      "Distrito Federal",
      "Brasil",
    ],
    openGraph: {
      type: "website",
      locale: ogLocale[locale as Locale],
      url: `${siteUrl}/${locale}`,
      siteName: "Fabiano Arthur · Portfolio",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: t("ogAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("twitterDescription"),
      images: ["/opengraph-image"],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "pt-BR": "/pt",
        en: "/en",
        es: "/es",
        "zh-CN": "/zh",
        "x-default": "/pt",
      },
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={htmlLang[locale as Locale]}
      className={`${inter.variable} ${instrumentSerif.variable} h-full bg-bg antialiased`}
    >
      <body
        className="flex min-h-full flex-col bg-bg font-sans text-ink"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 1200px 600px at 50% -10%, rgba(180,140,255,0.12), transparent 60%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
