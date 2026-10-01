"use client";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider({ slides }) {
  return (
    <section className="w-full px-4 pt-6 sm:pt-7">
      <div className="mx-auto w-full max-w-7xl">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop
          speed={700}
          grabCursor
          allowTouchMove
          simulateTouch
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-[95%] overflow-hidden rounded-xl [--swiper-pagination-color:#222] [--swiper-pagination-bullet-inactive-color:#fff] [--swiper-pagination-bullet-inactive-opacity:1] [--swiper-pagination-bullet-size:10px] [--swiper-pagination-bullet-horizontal-gap:4px] [&_.swiper-pagination-bullet]:transition-colors [&_.swiper-pagination-bullet:hover]:bg-[#222]!"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} className="w-full">
              <a href={slide.link} className="block w-full">
                <div className="relative h-35 w-full sm:h-52 lg:h-100">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
                    className="object-cover"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
