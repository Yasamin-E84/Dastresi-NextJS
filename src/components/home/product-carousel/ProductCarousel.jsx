"use client";

import { Navigation, Autoplay } from "swiper/modules";
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
          className="hidden items-center gap-2 text-xs text-gray-600 transition sm:flex"
        >
          <span>مشاهده همه محصولات</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-md border border-gray-900 text-gray-900 text-lg">
            ›
          </span>
        </a>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          dir="rtl"
          spaceBetween={18}
          speed={450}
          grabCursor
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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

        <button className="featured-prev absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full cursor-pointer bg-white text-gray-400 shadow-sm transition hover:text-black hover:bg-gray-400">
          <svg
            className="h-5 w-5"
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

        <button className="featured-next absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full cursor-pointer bg-white text-gray-400 shadow-sm transition hover:text-black hover:bg-gray-400">
          <svg
            className="h-5 w-5"
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
