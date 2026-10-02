"use client";

import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BrandsCarousel({ brands }) {
  return (
    <section className="mx-auto mb-4 max-w-[1206px] pt-5 pb-4 lg:py-9">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-7 text-right text-2xl font-extrabold text-[#777] lg:mb-8">
          محبوب‌ترین برندها
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            dir="rtl"
            loop={brands.length > 6}
            grabCursor
            speed={450}
            slidesPerView={6}
            spaceBetween={18}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".brands-prev",
              nextEl: ".brands-next",
            }}
            breakpoints={{
              0: { slidesPerView: 3, spaceBetween: 20 },
              426: { slidesPerView: 6, spaceBetween: 20 },
              768: { slidesPerView: 6, spaceBetween: 20 },
            }}
            className="w-full px-0.5"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <a
                  href={brand.link}
                  aria-label={brand.title}
                  className="my-4 flex h-14.5 items-center justify-center rounded-xl bg-white p-2 shadow-md transition-shadow duration-200 hover:shadow-lg sm:h-20 sm:p-3 lg:h-28 lg:p-4"
                >
                  <Image
                    src={brand.img}
                    alt={brand.title}
                    width={180}
                    height={80}
                    sizes="(max-width: 640px) 60px, (max-width: 1024px) 130px, 190px"
                    className="max-h-16 w-auto max-w-full object-contain lg:max-h-25"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="brands-next absolute -left-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm transition hover:bg-gray-400 hover:text-black"
          >
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

          <button
            type="button"
            className="brands-prev absolute -right-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm transition hover:bg-gray-400 hover:text-black"
          >
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
      </div>
    </section>
  );
}
