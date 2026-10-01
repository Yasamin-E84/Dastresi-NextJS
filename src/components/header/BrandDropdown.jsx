function splitBrandTitle(title) {
  const match = title.match(/^(.+?)(?=\s+[A-Za-z0-9])/);
  if (!match) return { fa: title, en: "" };
  return { fa: match[1].trim(), en: title.slice(match[1].length).trim() };
}

export default function BrandDropdown({ items }) {
  const brands = items.filter(item => item.id !== 31);
  const more = items.find(item => item.id === 31);
  const columns = Array.from({ length: 5 }, (_, index) => brands.slice(index * 6, index * 6 + 6));

  return (
    <div className="invisible fixed left-1/2 top-38 z-40 w-full max-w-7xl -translate-x-1/2 translate-y-2 rounded-b-md border border-gray-200 bg-white opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="grid grid-cols-5 divide-x divide-x-reverse divide-gray-200" dir="rtl">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="px-2 py-3">
            {column.map(brand => {
              const { fa, en } = splitBrandTitle(brand.title);

              return (
                <a key={brand.id} href={brand.link} className="flex h-10 items-center justify-between gap-3 px-2 text-xs text-gray-600 transition hover:text-[#0A5ABD]">
                  <span className="text-right">{fa}</span>
                  <span dir="ltr" className="text-left">{en}</span>
                </a>
              );
            })}
          </div>
        ))}
      </div>

      {more && (
        <div className="border-t border-gray-200 px-4 py-3 text-right">
          <a href={more.link} className="text-xs text-[#df5965] transition hover:text-[#c84d58]">مشاهده دیگر برندها ‹</a>
        </div>
      )}
    </div>
  );
}