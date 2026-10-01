import DealCard from "./DealCard";
import DealCountdown from "./DealCountdown";

export default function DailyDeals({ products }) {
  const [featured, tall, ...compact] = products;

  return (
    <section className="mx-auto mt-7 w-[95%] max-w-7xl rounded-xl bg-[#dedede] p-5 lg:p-8">
      <div className="mb-6 flex items-center justify-center lg:mb-7 lg:justify-between">
        <h2 className="flex items-center gap-2 text-xl font-extrabold text-[#777] lg:text-4xl"><span className="text-[#ff5964]">%</span>تخفیف‌های روزانه دسترسی</h2>
        <div className="hidden lg:block"><DealCountdown /></div>
      </div>

      <div dir="ltr" className="hidden h-144 grid-cols-[400px_300px_395px] justify-center gap-6 lg:grid">
        <div className="grid grid-rows-[208px_160px_160px] gap-6">
          {compact.slice(0, 3).map(product => <DealCard key={product.id} product={product} variant="compact" />)}
        </div>

        <DealCard product={tall} variant="tall" />
        <DealCard product={featured} variant="featured" />
      </div>

      <div className="grid gap-5 lg:hidden">
        {products.map(product => <DealCard key={product.id} product={product} variant="mobile" />)}
      </div>
    </section>
  );
}