import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { IndustriesSection } from "@/components/sections/industries";
import { DemosSection } from "@/components/sections/demos";
import { ProcessSection } from "@/components/sections/process";
import { BenefitsSection } from "@/components/sections/benefits";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <IndustriesSection />
        <DemosSection />
        <ProcessSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
