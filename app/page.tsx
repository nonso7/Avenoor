import { Developers } from "@/components/Developers";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Nav } from "@/components/Nav";
import { Platform } from "@/components/Platform";
import { Problem } from "@/components/Problem";
import { Settlement } from "@/components/Settlement";
import { Vision } from "@/components/Vision";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Platform />
        <HowItWorks />
        <Settlement />
        <Developers />
        <Vision />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
