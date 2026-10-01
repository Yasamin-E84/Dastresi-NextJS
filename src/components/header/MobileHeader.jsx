"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BlackBg from "@/components/blackbg";
import MobileDrawer from "./MobileDrawer";
import { faNumber } from "@/lib/fa";

export default function MobileHeader({ site, mobileHeader }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = mobileHeader.topNavigation.find((item) => item.id === 1);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="relative z-30 flex h-15 w-full items-center justify-between border-b border-gray-200 bg-[#EFEFEF] px-5 shadow-sm lg:hidden">
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="منو"
            className="text-gray-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>

          <Image
            src={site.logo.img}
            alt={site.logo.alt}
            width={90}
            height={45}
            className="w-15 object-contain"
          />
        </div>
        <div className="flex items-center gap-5 text-gray-600">
          <button aria-label="جستجو">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" strokeLinecap="round" />
            </svg>
          </button>

          <button aria-label="حساب کاربری">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="8" r="3" />
              <path d="M5 20c.7-4 3-6 7-6s6.3 2 7 6" strokeLinecap="round" />
            </svg>
          </button>

          <a href={cart?.link} className="relative" aria-label="سبد خرید">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="M3 4h2l2 11h10l2-7H6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="19" r="1" />
              <circle cx="17" cy="19" r="1" />
            </svg>
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ff6262] px-1 text-[10px] text-white">
              {faNumber(cart?.title ?? 0)}
            </span>
          </a>
        </div>
      </header>

      {menuOpen && (
        <BlackBg
          onClick={() => setMenuOpen(false)}
          className="inset-0 z-40 lg:hidden"
        />
      )}
      <MobileDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        site={site}
        mobileHeader={mobileHeader}
      />
    </>
  );
}
