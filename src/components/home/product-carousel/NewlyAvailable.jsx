import ProductCarousel from "./ProductCarousel";

export default function NewlyAvailable({ products }) {
  return (
    <ProductCarousel
      id="newly-available"
      title="همین الان موجود شد..."
      products={products}
    />
  );
}
