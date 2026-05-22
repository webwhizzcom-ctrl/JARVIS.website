import { Metadata } from "next";
import { SITE, PAGES, generatePageMeta } from "@/lib/seo";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { SystemsNominal } from "@/components/sections/SystemsNominal";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = generatePageMeta(PAGES.home);

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CinematicReveal />
        <SystemsNominal />
      </main>
      <Footer />
    </>
  );
}
