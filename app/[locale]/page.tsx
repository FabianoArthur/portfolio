import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { About } from "@/components/About";
import { VariationsShowcase } from "@/components/VariationsShowcase";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { VariationSwitcher } from "@/components/VariationSwitcher";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Stack />
        <About />
        <VariationsShowcase />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <VariationSwitcher
        current="v4-dark"
        accent="#b48cff"
        locale={locale as "pt" | "en" | "es" | "zh"}
      />
    </>
  );
}
