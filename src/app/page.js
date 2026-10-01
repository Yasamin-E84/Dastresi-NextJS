import Header from "@/components/header/Header";
import HeroSlider from "@/components/home/hero/HeroSlider";
import DailyDeals from "@/components/home/daily-deals/DailyDeals";
import FeaturedCategories from "@/components/home/featured-categories/FeaturedCategories";
import NewlyAvailable from "@/components/home/product-carousel/NewlyAvailable";
import BestSellers from "@/components/home/product-carousel/BestSellers";
import {
  getSliderData,
  getDailyDealsData,
  getFeaturedCategoriesData,
  getNewlyAvailableData,
  getBestSellersData,
} from "@/lib/api";

export default async function Home() {
  const [slides, dailyDeals, featuredCategories, newlyAvailable, bestSellers] =
    await Promise.all([
      getSliderData(),
      getDailyDealsData(),
      getFeaturedCategoriesData(),
      getNewlyAvailableData(),
      getBestSellersData(),
    ]);

  return (
    <>
      <Header />
      <main className="w-full">
        <HeroSlider slides={slides} />
        <DailyDeals products={dailyDeals} />
        <FeaturedCategories categories={featuredCategories} />
        <NewlyAvailable products={newlyAvailable} />
        <BestSellers products={bestSellers} />
      </main>
    </>
  );
}
