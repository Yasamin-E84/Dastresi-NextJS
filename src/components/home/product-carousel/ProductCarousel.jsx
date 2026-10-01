"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/navigation";

export default function ProductCarousel({
  title,
  products,
  viewAllLink = "/products",
  id,
}) {
  const prevClass = `${id}-prev`;
  const nextClass = `${id}-next`;

  return (
    <section className="mx-auto mt-10 w-[95%] max-w-7xl rounded-xl bg-[#dedede] p-4 sm:p-6 lg:p-8">
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-[#777] lg:text-2xl">
          {title}
        </h2>

        <a
          href={viewAllLink}
          className="hidden items-center gap-2 text-xs text-gray-600 transition hover:text-[#0865c4] sm:flex"
        >
          <span>مشاهده همه محصولات</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-md border border-[#0865c4] text-[#0865c4]">
            ‹
          </span>
        </a>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          dir="rtl"
          spaceBetween={18}
          speed={450}
          grabCursor
          navigation={{ prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }}
          breakpoints={{
            0: { slidesPerView: 2.15, spaceBetween: 12 },
            430: { slidesPerView: 3, spaceBetween: 18 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 22 },
          }}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="h-76! lg:h-104!">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`${prevClass} absolute -left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm`}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="m15 18-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className={`${nextClass} absolute -right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm`}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="m9 18 6-6-6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
