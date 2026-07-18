import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <About />
      <Footer />
    </>
  );
}