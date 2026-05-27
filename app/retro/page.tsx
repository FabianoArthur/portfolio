import Nav from "@/components/v6/Nav";
import Hero from "@/components/v6/Hero";
import About from "@/components/v6/About";
import SelectedWork from "@/components/v6/SelectedWork";
import Stack from "@/components/v6/Stack";
import Contact from "@/components/v6/Contact";
import Footer from "@/components/v6/Footer";
import { VariationSwitcher } from "@/components/VariationSwitcher";

export default function RetroPage() {
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
      <VariationSwitcher current="v6-retro" accent="#d4501e" locale="pt" />
    </>
  );
}
