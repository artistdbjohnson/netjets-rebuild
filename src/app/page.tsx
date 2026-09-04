import Hero from "@/components/Hero";
import OwnersLounge from "@/components/sections/OwnersLounge";
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
 * After cinematic Motionsites hero:
 * Owners Lounge → Contact → Pinnacle → cards… → Explore → Contact phone → Footer
 * Theme: LIGHT default / DARK Motionsites via data-theme. Hero has no program headlines.
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bed)]">
      <Hero />
      <OwnersLounge />
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
