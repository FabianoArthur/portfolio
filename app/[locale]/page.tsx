import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { RevealObserver } from "@/components/RevealObserver";
import { SkipLink } from "@/components/SkipLink";
import { Stack } from "@/components/Stack";
import { routing } from "@/i18n/routing";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <SkipLink />
      <Nav />
      <main id="content" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
