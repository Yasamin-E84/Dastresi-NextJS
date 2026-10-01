import Image from "next/image";
import { faNumber } from "@/lib/fa";

export default function ProductCard({ product }) {
  return (
    <a
      href={product.link}
      dir="rtl"
      className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg group"
    >
      {!!product.colors?.length && (
        <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
          {product.colors.map((color, index) => (
            <span
              key={`${color}-${index}`}
              className="h-3 w-3 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}

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
        <span className="mb-2 text-sm text-gray-400">{product.category}</span>

        <h3 className="line-clamp-2 text-sm leading-6 text-gray-800 lg:text-base lg:leading-7 group-hover:text-[#0865c4]">
          {product.title}
        </h3>

        <div className="mt-auto">
          {!product.available ? (
            <div className="-mx-3 -mb-3 mt-4 bg-[#fff2f2] py-4 text-center text-sm text-[#c62828] lg:-mx-4 lg:-mb-4">
              ناموجود
            </div>
          ) : (
            <>
              {!!product.oldPrice && (
                <div className="mb-1 text-left">
                  <del className="text-sm text-gray-400">
                    {faNumber(product.oldPrice)}
                  </del>
                </div>
              )}
              <div dir="ltr" className="flex items-center justify-start gap-1">
                <span dir="rtl" className="text-xs text-gray-500">
                  {product.currency}
                </span>
                <strong className="text-lg font-bold text-[#0865c4]">
                  {faNumber(product.price)}
                </strong>
              </div>
            </>
          )}
        </div>
      </div>
    </a>
  );
}
