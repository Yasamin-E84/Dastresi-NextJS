"use client";

import { useState } from "react";
import Link from "next/link";
import BlackBg from "@/components/blackbg";
import BrandDropdown from "./BrandDropdown";

export default function CategoryNav({ items }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        onMouseLeave={() => setMenuOpen(false)}
        className="relative z-30 h-14 w-full bg-white"
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
          <Link
            href="/"
            onMouseEnter={() => setMenuOpen(false)}
            className="flex h-full items-center border-b-3 border-[#df5965] px-3 text-sm font-medium text-[#df5965]"
          >
            خانه
          </Link>

          {items.map((item) => {
            const isBrands = item.id === "brand-dropdown";

            return (
              <div
                key={item.id}
                onMouseEnter={() => setMenuOpen(true)}
                className="group relative flex h-full items-center"
              >
                <a
                  href={item.link}
                  className="flex h-full items-center gap-2 px-3 text-sm text-gray-600 transition-colors group-hover:border-b-3 group-hover:border-[#df5965] group-hover:text-[#df5965]"
                >
                  <span>{item.title}</span>
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                    <path d="M5.5 7.5 10 12l4.5-4.5z" />
                  </svg>
                </a>

                {isBrands ? (
                  <BrandDropdown items={item.hoverItems} />
                ) : (
                  <div className="invisible absolute top-full right-0 z-40 w-80 translate-y-2 rounded-b-md border border-gray-100 bg-white opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="py-3">
                      {item.tree.map((category) => (
                        <div key={category.id} className="group/sub relative">
                          <a
                            href={category.link}
                            className="flex items-center justify-between px-5 py-3 text-sm text-gray-600 transition hover:text-[#0A5ABD] group hover:bg-gray-100"
                          >
                            <span>{category.title}</span>
                            {!!category.children?.length && (
                              <span className="text-lg text-gray-400">›</span>
                            )}
                          </a>

                          {!!category.children?.length && (
                            <div className="invisible absolute top-0 right-full min-w-64 rounded-md border border-gray-100 bg-white py-2 opacity-0 shadow-xl transition group-hover/sub:visible group-hover/sub:opacity-100">
                              {category.children.map((child) => (
                                <a
                                  key={child.link}
                                  href={child.link}
                                  className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-600 transition hover:text-[#0A5ABD]"
                                >
                                  {child.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {menuOpen && <BlackBg className="inset-x-0 top-38 bottom-0 z-20" />}
    </>
  );
}
