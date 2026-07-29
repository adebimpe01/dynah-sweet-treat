import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { OurJourney } from "@/components/OurJourney";
import { MissionVision } from "@/components/MissionVision";
import { About } from "@/components/About";

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <OurJourney />
      <MissionVision />
      <About />
      <Footer />
    </>
  );
}