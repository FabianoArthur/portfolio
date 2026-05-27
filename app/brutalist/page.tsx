import Nav from "@/components/v3/Nav";
import Hero from "@/components/v3/Hero";
import About from "@/components/v3/About";
import SelectedWork from "@/components/v3/SelectedWork";
import Stack from "@/components/v3/Stack";
import Contact from "@/components/v3/Contact";
import Footer from "@/components/v3/Footer";
import { VariationSwitcher } from "@/components/VariationSwitcher";

export default function BrutalistPage() {
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
      <VariationSwitcher current="v3-brutalist" accent="#ff4d1c" locale="en" />
    </>
  );
}
