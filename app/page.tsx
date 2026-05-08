import ClientFX from "@/app/components/ClientFX";
import Navbar from "@/app/components/sections/Navbar";
import Hero from "@/app/components/sections/Hero";
import IntegrationsMarquee from "@/app/components/sections/IntegrationsMarquee";
import ProblemSection from "@/app/components/sections/ProblemSection";
import Features from "@/app/components/sections/Features";
import ICP from "@/app/components/sections/ICP";
import ValueProp from "@/app/components/sections/ValueProp";
import HowItWorks from "@/app/components/sections/HowItWorks";
import CTA from "@/app/components/sections/CTA";
import Footer from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ClientFX />
      <Navbar />
      <Hero />
      <IntegrationsMarquee />
      <ProblemSection />
      <Features />
      <ICP />
      <ValueProp />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}
