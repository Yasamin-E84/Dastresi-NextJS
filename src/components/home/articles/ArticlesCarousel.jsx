"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ArticlesCarousel({ articles }) {
  return (
    <section className="mx-auto mt-14 w-full max-w-7xl px-4">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-[#777] lg:text-2xl">
          آخرین مقالات
        </h2>
        <a
          href="/articles"
          className="hidden items-center gap-2 text-sm text-gray-500 sm:flex"
        >
          <span>ورود به بلاگ</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-md border text-lg">
            ‹
          </span>
        </a>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          dir="rtl"
          loop
          grabCursor
          speed={450}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{ prevEl: ".articles-prev", nextEl: ".articles-next" }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 12 },
            640: { slidesPerView: 3, spaceBetween: 18 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="articles-swiper pb-10"
        >
          {articles.map((article) => (
            <SwiperSlide key={article.id}>
              <a
                href={article.link}
                className="block overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="relative aspect-[1.7/1] w-full">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    sizes="(max-width:640px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-h-20 items-center justify-center px-3 py-4 text-center">
                  <h3 className="line-clamp-2 text-sm leading-6 text-gray-700 lg:text-base">
                    {article.title}
                  </h3>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className="articles-next absolute -left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition hover:text-black"
        >
          ‹
        </button>
        <button
          type="button"
          className="articles-prev absolute -right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition hover:text-black"
        >
          ›
        </button>
      </div>

      <style jsx global>{`
        .articles-swiper .swiper-pagination {
          bottom: 0;
        }
        .articles-swiper .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          background: #e5e7eb;
          opacity: 1;
        }
        .articles-swiper .swiper-pagination-bullet-active {
          background: #333;
        }
      `}</style>
    </section>
  );
}
