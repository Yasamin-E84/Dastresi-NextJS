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
  getBrandsData,
} from "@/lib/api";
import BrandsCarousel from "@/components/home/brands/BrandsCarousel";

export default async function Home() {
  const [
    slides,
    dailyDeals,
    featuredCategories,
    newlyAvailable,
    bestSellers,
    brands,
  ] = await Promise.all([
    getSliderData(),
    getDailyDealsData(),
    getFeaturedCategoriesData(),
    getNewlyAvailableData(),
    getBestSellersData(),
    getBrandsData(),
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
        <BrandsCarousel brands={brands} />
      </main>
    </>
  );
}
