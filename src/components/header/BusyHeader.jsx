"use client";

import { useState } from "react";
import { faNumber } from "@/lib/fa";
import Image from "next/image";
import Link from "next/link";
import BlackBg from "@/components/blackbg";

export default function BusyHeader({ site, desktopHeader }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const links = desktopHeader.topNavigation.filter(item => item.id >= 1 && item.id <= 4);
  const cart = desktopHeader.topNavigation.find(item => item.id === 5);
  const login = desktopHeader.topNavigation.find(item => item.id === 6);

  return (
    <>
      <header className="h-24 w-full bg-white">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-8 px-6">
          <div className="flex items-center gap-7">
            <Link href="/" className="shrink-0"><Image src={site.logo.img} alt={site.logo.alt} className="w-24 object-contain" width={105} height={105} /></Link>

            <div className={`relative z-50 flex w-94 items-center gap-1 rounded-xl border pr-1.5 text-right text-sm text-gray-700 shadow-sm ${searchFocused ? "border-gray-200 bg-white" : "border-gray-100 bg-[#f7f7f8]"}`}>
              <svg className="h-6.5 w-6.5 text-[#AFAFAF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="11" cy="11" r="7" strokeWidth="1.7" /><path d="m20 20-4-4" strokeWidth="1.7" strokeLinecap="round" /></svg>
              <input type="text" placeholder={site.searchPlaceholder} onFocus={() => setSearchFocused(true)} className="h-9 w-full bg-transparent outline-none placeholder:text-base placeholder:font-medium placeholder:text-gray-400" />
              {searchFocused && <button onClick={() => setSearchFocused(false)} className="ml-2 text-xl text-gray-400">×</button>}
            </div>

            <nav className="flex shrink-0 items-center gap-7">
              {links.map(item => <a key={item.id} href={item.link} className="text-sm font-semibold text-gray-400 transition hover:text-[#08285c]">{item.title}</a>)}
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <a href={cart?.link} className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-[#F7F8FA] shadow-sm">
              <svg className="h-6.5 w-6.5 text-[#ff5b5b] transition-colors group-hover:text-[#0865c4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 4h2l2 11h10l2-7H6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9" cy="19" r="1" /><circle cx="17" cy="19" r="1" /></svg>
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ff6262] px-1 text-[10px] text-white">{faNumber(cart?.title ?? 0)}</span>
            </a>

            <a href={login?.link} className="flex items-center rounded-xl bg-[#0865c4] px-4 py-3 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#08285c]">{login?.title}</a>
          </div>
        </div>
      </header>

      {searchFocused && <BlackBg onClick={() => setSearchFocused(false)} className="inset-0 z-40" />}
    </>
  );
}