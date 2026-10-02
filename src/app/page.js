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
  getWhyUsData,
  getArticlesData,
} from "@/lib/api";
import BrandsCarousel from "@/components/home/brands/BrandsCarousel";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";
import ArticlesCarousel from "@/components/home/articles/ArticlesCarousel";

export default async function Home() {
  const [
    slides,
    dailyDeals,
    featuredCategories,
    newlyAvailable,
    bestSellers,
    brands,
    services,
    latestArticles,
  ] = await Promise.all([
    getSliderData(),
    getDailyDealsData(),
    getFeaturedCategoriesData(),
    getNewlyAvailableData(),
    getBestSellersData(),
    getBrandsData(),
    getWhyUsData(),
    getArticlesData(),
  ]);

  return (
    <>
      <Header />
      <main className="w-full bg-[#FAFAFA]">
        <HeroSlider slides={slides} />
        <DailyDeals products={dailyDeals} />
        <FeaturedCategories categories={featuredCategories} />
        <NewlyAvailable products={newlyAvailable} />
        <WhyChooseUs services={services} />
        <BestSellers products={bestSellers} />
        <BrandsCarousel brands={brands} />
        <ArticlesCarousel articles={latestArticles} />
      </main>
    </>
  );
}
