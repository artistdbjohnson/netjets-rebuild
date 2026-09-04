import Hero from "@/components/Hero";
import ContactUtility from "@/components/sections/ContactUtility";
import Pinnacle from "@/components/sections/Pinnacle";
import CostTransparency from "@/components/sections/CostTransparency";
import NewAircraft from "@/components/sections/NewAircraft";
import UnsurpassableLuxury from "@/components/sections/UnsurpassableLuxury";
import CorporateTravel from "@/components/sections/CorporateTravel";
import NetJetsVsOthers from "@/components/sections/NetJetsVsOthers";
import NewsLink from "@/components/sections/NewsLink";
import ExplorePossibilities from "@/components/sections/ExplorePossibilities";
import ContactPhone from "@/components/sections/ContactPhone";
import Footer from "@/components/Footer";

/**
 * Homepage sequence (after dark liquid-glass hero):
 * 1 Contact utility → 2 Pinnacle → 3 Cost Transparency → 4 80+ New Aircraft →
 * 5 Unsurpassable Luxury → 6 Corporate Travel → 7 NetJets vs Others →
 * 8 News → 9 Explore Possibilities → 10 Contact phone → Footer
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Hero />
      <ContactUtility />
      <Pinnacle />
      <CostTransparency />
      <NewAircraft />
      <UnsurpassableLuxury />
      <CorporateTravel />
      <NetJetsVsOthers />
      <NewsLink />
      <ExplorePossibilities />
      <ContactPhone />
      <Footer />
    </main>
  );
}
