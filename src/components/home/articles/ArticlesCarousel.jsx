"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ArticlesCarousel({ articles }) {
  return (
    <section className="mx-auto mt-14 w-[95%] max-w-7xl">
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
            ›
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
            0: {
              slidesPerView: 1.35,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="articles-swiper pb-12 [--swiper-pagination-color:#222] [--swiper-pagination-bullet-inactive-color:#e5e7eb] [--swiper-pagination-bullet-inactive-opacity:1] [--swiper-pagination-bullet-size:10px] [--swiper-pagination-bullet-horizontal-gap:5px]"
        >
          {articles.map((article) => (
            <SwiperSlide key={article.id}>
              <a
                href={article.link}
                className="block overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="relative h-36 w-full lg:h-38">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    sizes="(max-width:640px) 80vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex min-h-18 items-center justify-center px-4 py-3 text-center">
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
          className="articles-next absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition hover:bg-gray-400 hover:text-black"
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
          className="articles-prev absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition hover:bg-gray-400 hover:text-black"
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
      <style jsx global>{`
        .articles-swiper .swiper-pagination {
          top: 100%;
        }

        .articles-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #e5e7eb;
          opacity: 1;
          transition: 0.2s;
        }

        .articles-swiper .swiper-pagination-bullet-active {
          background: #222;
        }

        .articles-swiper .swiper-pagination-bullet:hover {
          background: #222;
        }
      `}</style>
    </section>
  );
}
