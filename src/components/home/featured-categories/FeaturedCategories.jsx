"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

export default function FeaturedCategories({ categories }) {
  return (
    <section className="mx-auto mt-14 w-full max-w-7xl px-4">
      <h2 className="mb-10 text-center text-2xl font-extrabold text-gray-900">
        دسته‌بندی‌های منتخب
      </h2>

      <div className="relative hidden lg:block">
        <Swiper
          modules={[Navigation, Autoplay]}
          dir="rtl"
          loop
          slidesPerView={6}
          spaceBetween={35}
          speed={300}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{ prevEl: ".featured-prev", nextEl: ".featured-next" }}
          className="w-full px-4"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <a href={category.link} className="block">
                <Image
                  src={category.img}
                  alt={category.title}
                  width={190}
                  height={190}
                  className="mx-auto w-full max-w-44 object-contain"
                />
              </a>
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

      <div className="grid grid-cols-2 gap-x-8 gap-y-10 px-5 lg:hidden">
        {categories.slice(0, 6).map((category) => (
          <a key={category.id} href={category.link} className="block">
            <Image
              src={category.img}
              alt={category.title}
              width={220}
              height={220}
              className="mx-auto w-full object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
