"use client";

import { useState } from "react";
import Image from "next/image";

function Chevron({ open }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m7 10 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MobileDrawer({ open, onClose, site, mobileHeader }) {
  const [openMain, setOpenMain] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  const quickLinks = mobileHeader.topNavigation.filter(
    (item) => item.id >= 2 && item.id <= 5,
  );
  const club = mobileHeader.topNavigation.find((item) => item.id === 6);

  return (
    <aside
      className={`fixed right-0 top-0 z-50 flex h-dvh w-80 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex h-32 shrink-0 items-center justify-center border-b border-gray-200">
        <Image
          src={site.logo.img}
          alt={site.logo.alt}
          width={105}
          height={105}
          loading="eager"
          className="w-24 object-contain"
        />
      </div>

      <div className="grid shrink-0 grid-cols-4 border-b border-gray-200">
        {quickLinks.map((item) => (
          <a
            key={item.id}
            href={item.link}
            onClick={onClose}
            className="py-5 text-center text-xs font-medium text-gray-400 transition hover:text-[#0865c4]"
          >
            {item.title}
          </a>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        {mobileHeader.sidebarMenu.map((item) => {
          const opened = openMain === item.id;

          return (
            <div key={item.id} className="border-b border-gray-100">
              <button
                onClick={() => {
                  setOpenMain(opened ? null : item.id);
                  setOpenSub(null);
                }}
                className="flex w-full items-center justify-between px-6 py-5 text-right text-base font-medium text-gray-900"
              >
                <span>{item.title}</span>
                <Chevron open={opened} />
              </button>

              {opened && (
                <div className="bg-[#fcfcfc] pb-3">
                  <a
                    href={item.link}
                    onClick={onClose}
                    className="flex items-center gap-2 px-9 py-3 text-sm text-gray-400"
                  >
                    <span>همه موارد این دسته</span>
                    <span className="rotate-180">‹</span>
                  </a>

                  {item.tree?.map((category) => {
                    const hasChildren = !!category.children?.length;
                    const subId = `${item.id}-${category.id}`;
                    const subOpened = openSub === subId;

                    return (
                      <div key={category.id}>
                        {hasChildren ? (
                          <button
                            onClick={() => setOpenSub(subOpened ? null : subId)}
                            className="flex w-full items-center justify-between px-9 py-4 text-right text-sm text-gray-900"
                          >
                            <span>{category.title}</span>
                            <Chevron open={subOpened} />
                          </button>
                        ) : (
                          <a
                            href={category.link}
                            onClick={onClose}
                            className="block px-9 py-4 text-sm text-gray-900"
                          >
                            {category.title}
                          </a>
                        )}

                        {hasChildren && subOpened && (
                          <div className="mr-9 border-r-2 border-[#ff5964]">
                            <a
                              href={category.link}
                              onClick={onClose}
                              className="flex items-center gap-2 px-5 py-3 text-sm text-gray-400"
                            >
                              <span>همه موارد این دسته</span>
                              <span className="rotate-180">‹</span>
                            </a>
                            {category.children.map((child) => (
                              <a
                                key={child.link}
                                href={child.link}
                                onClick={onClose}
                                className="block px-5 py-3 text-xs text-gray-700 transition hover:text-[#0865c4]"
                              >
                                {child.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {club && (
        <div className="shrink-0 border-t border-gray-100 bg-white p-5">
          <a
            href={club.link}
            className="flex h-12 items-center justify-center rounded-xl bg-[#082e68] text-sm font-bold text-white"
          >
            {club.title}
          </a>
        </div>
      )}
    </aside>
  );
}
