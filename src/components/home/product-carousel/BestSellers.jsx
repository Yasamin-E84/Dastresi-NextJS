import ProductCarousel from "./ProductCarousel";

export default function BestSellers({ products }) {
  return (
    <ProductCarousel
      id="best-sellers"
      title="پرفروش‌ترین محصولات"
      products={products}
    />
  );
}
