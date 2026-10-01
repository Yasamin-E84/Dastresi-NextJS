import Image from "next/image";
import { faNumber } from "@/lib/fa";

export default function DealCard({ product, variant = "mobile" }) {
  if (!product) return null;
  const discount = Math.max(0, product.oldPrice - product.price);

  if (variant === "compact") {
    return (
      <a
        href={product.link}
        dir="rtl"
        className="grid h-full grid-cols-[42%_58%] overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
      >
        <div className="relative h-full">
          <Image
            src={product.img}
            alt={product.alt || product.title}
            fill
            sizes="200px"
            className="object-contain p-2"
          />
        </div>

        <div className="flex min-w-0 flex-col px-3 py-4 text-right">
          <h3 className="text-sm leading-7 text-gray-900">{product.title}</h3>

          <div className="mt-auto">
            <div dir="ltr" className="mb-2 grid grid-cols-2 items-center gap-2">
              <span
                dir="rtl"
                className="whitespace-nowrap text-left text-xs text-[#ff5964]"
              >
                {faNumber(discount)} تومان تخفیف
              </span>
              <del dir="rtl" className="text-right text-xs text-gray-400">
                {faNumber(product.oldPrice)}
              </del>
            </div>

            <div dir="ltr" className="flex items-center justify-start gap-1">
              <span dir="rtl" className="text-xs text-gray-500">
                {product.currency}
              </span>
              <strong className="text-lg font-bold text-[#0865c4]">
                {faNumber(product.price)}
              </strong>
            </div>
          </div>
        </div>
      </a>
    );
  }

  if (variant === "featured" || variant === "tall") {
    const featured = variant === "featured";

    return (
      <a
        href={product.link}
        dir="rtl"
        className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
      >
        <div className={`relative w-full ${featured ? "h-88" : "h-80"}`}>
          <Image
            src={product.img}
            alt={product.alt || product.title}
            fill
            sizes={featured ? "400px" : "300px"}
            className="object-cover p-4"
          />
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5 text-right">
          <h3 className="text-base leading-8 text-gray-900">{product.title}</h3>

          <div className="mt-auto">
            <div dir="ltr" className="mb-3 grid grid-cols-2 items-center">
              <span dir="rtl" className="text-left text-sm text-[#ff5964]">
                {faNumber(discount)} تومان تخفیف
              </span>
              <del dir="rtl" className="text-right text-sm text-gray-400">
                {faNumber(product.oldPrice)}
              </del>
            </div>

            <div dir="ltr" className="flex items-center justify-start gap-1">
              <span dir="rtl" className="text-sm text-gray-500">
                {product.currency}
              </span>
              <strong className="text-xl font-bold text-[#0865c4]">
                {faNumber(product.price)}
              </strong>
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={product.link}
      dir="rtl"
      className="grid min-h-40 grid-cols-[40%_60%] overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
    >
      <div className="relative min-h-40">
        <Image
          src={product.img}
          alt={product.alt || product.title}
          fill
          sizes="40vw"
          className="object-contain p-3"
        />
      </div>

      <div className="flex min-w-0 flex-col px-4 py-4 text-right">
        <h3 className="text-sm leading-7 text-gray-900">{product.title}</h3>

        <div className="mt-auto">
          <div dir="ltr" className="mb-2 grid grid-cols-2 items-center gap-2">
            <span dir="rtl" className="text-left text-xs text-[#ff5964]">
              {faNumber(discount)} تومان تخفیف
            </span>
            <del dir="rtl" className="text-right text-xs text-gray-400">
              {faNumber(product.oldPrice)}
            </del>
          </div>

          <div dir="ltr" className="flex items-center justify-start gap-1">
            <strong className="text-lg font-bold text-[#0865c4]">
              {faNumber(product.price)}
            </strong>
            <span dir="rtl" className="text-xs text-gray-500">
              {product.currency}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
