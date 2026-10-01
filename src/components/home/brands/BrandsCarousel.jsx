"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

export default function BrandsCarousel({ brands }) {
  return (
    <section className="mx-auto mt-14 max-w-7xl">
      <h2 className="mb-10 text-right text-2xl font-extrabold text-[#777]">
        محبوب‌ترین برندها
      </h2>

      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          dir="rtl"
          loop
          grabCursor
          speed={450}
          spaceBetween={18}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{ prevEl: ".brands-prev", nextEl: ".brands-next" }}
          breakpoints={{
            0: { slidesPerView: 4.5, spaceBetween: 12 },
            430: { slidesPerView: 5.5, spaceBetween: 14 },
            640: { slidesPerView: 6, spaceBetween: 18 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
          className="w-full"
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <a
                href={brand.link}
                className="flex h-24 items-center justify-center rounded-xl bg-white px-4 shadow-sm transition-shadow duration-200 hover:shadow-lg lg:h-28"
              >
                <Image
                  src={brand.img}
                  alt={brand.title}
                  width={180}
                  height={80}
                  className="max-h-12 w-auto max-w-full object-contain lg:max-h-14"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="brands-prev absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition hover:bg-gray-400 hover:text-black">
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

        <button className="brands-next absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition hover:bg-gray-400 hover:text-black">
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
