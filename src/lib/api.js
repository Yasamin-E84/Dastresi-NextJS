import fs from "fs/promises";
import path from "path";

async function get(endpoint) {
  const filePath = path.join(process.cwd(), "public", "db.json");

  const file = await fs.readFile(filePath, "utf-8");

  const data = JSON.parse(file);

  return data[endpoint];
}

export async function getHeaderData() {
  const [site, desktopHeader, mobileHeader, megaMenu] = await Promise.all([
    get("site"),
    get("desktopHeader"),
    get("mobileHeader"),
    get("megaMenu"),
  ]);

  return { site, desktopHeader, mobileHeader, megaMenu };
}

export async function getSliderData() {
  return get("slider");
}

export async function getDailyDealsData() {
  return get("dailyDeals");
}

export async function getFeaturedCategoriesData() {
  return get("featuredCategories");
}

export async function getNewlyAvailableData() {
  return get("newlyAvailable");
}

export async function getBestSellersData() {
  return get("bestSellers");
}

export async function getBrandsData() {
  return get("brands");
}

export async function getWhyUsData() {
  return get("services");
}

export async function getArticlesData() {
  return get("latestArticles");
}

export async function getFooterData() {
  return get("footer");
}
