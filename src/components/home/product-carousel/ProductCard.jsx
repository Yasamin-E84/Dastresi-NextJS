import Image from "next/image";
import { faNumber } from "@/lib/fa";

export default function ProductCard({ product }) {
  return (
    <a
      href={product.link}
      dir="rtl"
      className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
    >
      <div className="relative h-44 w-full shrink-0 sm:h-48 lg:h-64">
        <Image
          src={product.img}
          alt={product.alt || product.title}
          fill
          sizes="(max-width: 640px) 33vw, (max-width: 1024px) 30vw, 280px"
          className="object-contain p-3 lg:p-5"
        />
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 lg:px-4 lg:pb-4">
        <span className="mb-2 text-xs text-gray-400">{product.category}</span>
        <h3 className="line-clamp-2 text-sm leading-6 text-gray-800 lg:text-base lg:leading-7">
          {product.title}
        </h3>

        <div className="mt-auto">
          {!product.available ? (
            <div className="-mx-3 -mb-3 mt-4 bg-[#fff2f2] py-4 text-center text-sm text-[#d93025] lg:-mx-4 lg:-mb-4">
              ناموجود
            </div>
          ) : (
            <>
              {!!product.oldPrice && (
                <div className="mb-1 text-left">
                  <del className="text-xs text-gray-400">
                    {faNumber(product.oldPrice)}
                  </del>
                </div>
              )}
              <div dir="ltr" className="flex items-center justify-start gap-1">
                <strong className="text-lg font-bold text-[#0865c4]">
                  {faNumber(product.price)}
                </strong>
                <span dir="rtl" className="text-xs text-gray-500">
                  {product.currency}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </a>
  );
}
