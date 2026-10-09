import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import DrinkMenu from "@/components/DrinkMenu";
import Goods from "@/components/Goods";
import Access from "@/components/Access";
import Footer from "@/components/Footer";
import SectionWave from "@/components/SectionWave";
import GoodsAccessDivider from "@/components/GoodsAccessDivider";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SectionWave />
      <Menu />
      <DrinkMenu />
      <Goods />
      <GoodsAccessDivider />
      <Access />
      <Footer />
    </main>
  );
}