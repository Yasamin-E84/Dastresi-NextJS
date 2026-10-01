const API_URL = "http://localhost:5000";

async function get(endpoint) {
  const res = await fetch(`${API_URL}/${endpoint}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
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