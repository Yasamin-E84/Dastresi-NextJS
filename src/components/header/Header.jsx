import { getHeaderData } from "@/lib/api";
import BusyHeader from "./BusyHeader";
import CategoryNav from "./CategoryNav";
import MobileHeader from "./MobileHeader";

export default async function Header() {
  const { site, desktopHeader, mobileHeader, megaMenu } = await getHeaderData();

  return (
    <>
      <div className="hidden lg:block border-b border-gray-200 w-full">
        <div className="max-w-7xl mx-auto">
          <BusyHeader site={site} desktopHeader={desktopHeader} />
          <CategoryNav items={megaMenu} />
        </div>
      </div>

      <MobileHeader site={site} mobileHeader={mobileHeader} />
    </>
  );
}
