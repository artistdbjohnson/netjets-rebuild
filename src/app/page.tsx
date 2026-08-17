import Hero from "@/components/Hero";
import Benefits from "@/components/sections/Benefits";
import FleetPreview from "@/components/sections/FleetPreview";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Hero />
      <Benefits />
      <FleetPreview />
      <CTA />
      <Footer />
    </main>
  );
}
