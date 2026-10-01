import Header from "@/components/header/Header";
import HeroSlider from "@/components/home/hero/HeroSlider";
import DailyDeals from "@/components/home/daily-deals/DailyDeals";
import { getDailyDealsData, getSliderData } from "@/lib/api";

export default async function Home() {
  const [slides, dailyDeals] = await Promise.all([
    getSliderData(),
    getDailyDealsData(),
  ]);

  return (
    <>
      <Header />
      <main className="w-full">
        <HeroSlider slides={slides} />
        <DailyDeals products={dailyDeals} />
      </main>
    </>
  );
}
