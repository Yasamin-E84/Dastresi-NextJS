"use client";

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="hidden w-24 items-center justify-between rounded-xl bg-white py-2 pr-2 pl-1 text-xs leading-5 text-[#757575] shadow-md xl:flex"
    >
      <span>برو بالا</span>

      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 15L12 9L18 15"
          stroke="#757575"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
