import Nav from "@/components/v5/Nav";
import Hero from "@/components/v5/Hero";
import About from "@/components/v5/About";
import SelectedWork from "@/components/v5/SelectedWork";
import Stack from "@/components/v5/Stack";
import Contact from "@/components/v5/Contact";
import Footer from "@/components/v5/Footer";
import { VariationSwitcher } from "@/components/VariationSwitcher";

export default function VibrantPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <SelectedWork />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <VariationSwitcher current="v5-vibrant" accent="#ff5b1f" locale="pt" />
    </>
  );
}
