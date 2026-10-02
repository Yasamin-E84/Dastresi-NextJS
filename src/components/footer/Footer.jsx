import Image from "next/image";
import BackToTop from "./BackToTop";

function PhoneIcon({ className = "h-5.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`${className} shrink-0 text-[#8a8a8a]`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6 14.4l-1.9 1.9a1.6 1.6 0 0 1-1.7.36 15.5 15.5 0 0 1-5.64-3.65A15.5 15.5 0 0 1 3.7 7.4a1.6 1.6 0 0 1 .36-1.7L5.96 3.8a1.6 1.6 0 0 1 2.2-.08l2.1 1.8a1.6 1.6 0 0 1 .4 1.98l-.82 1.48a1 1 0 0 0 .12 1.17l2.71 2.71a1 1 0 0 0 1.17.12l1.48-.82a1.6 1.6 0 0 1 1.98.4l1.8 2.1a1.6 1.6 0 0 1-.08 2.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className = "h-5.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`${className} shrink-0 text-[#8a8a8a]`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="8.25"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 7.8v4.55l3.1 1.85"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon({ className = "h-5.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`${className} shrink-0 text-[#8a8a8a]`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function Footer({ footer }) {
  return (
    <footer className="w-full text-right lg:mt-20 mt-15">
      <div className="bg-[#e2e2e2] w-full">
        <div className="mx-auto  p-6 text-sm text-black/87 w-full">
          <div className="flex flex-col justify-between lg:flex-row max-w-7xl w-full mx-auto">
            <div className="mb-4 flex items-center gap-2 text-black/60 lg:mb-0">
              <PhoneIcon className="h-5" />
              <span className="text-wrap lg:text-nowrap">{footer.phone}</span>
            </div>

            <div className="mb-4 flex items-center gap-2 text-black/60 lg:mb-0">
              <ClockIcon className="h-6 " />
              <span className="leading-7 text-wrap lg:text-nowrap">
                {footer.businessHours}
              </span>
            </div>

            <div className="flex items-center gap-2 text-black/60">
              <LocationIcon className="mt-1 h-6 lg:mt-0" />
              <span className="leading-7 text-wrap lg:text-nowrap">
                {footer.address}
              </span>
            </div>

            <BackToTop />
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5]">
        <div className="mx-auto flex max-w-301.5 flex-col gap-8 px-4 py-4 lg:flex-row lg:py-8">
          <div className="contents">
            {/* logo */}
            <div className="flex flex-col items-center justify-center gap-8 pt-8 lg:pt-0">
              <Image
                src={footer.logo}
                width={190}
                height={86}
                alt="Dastresi"
                className="max-w-[190px]"
              />

              <div className="flex flex-row flex-wrap justify-center gap-4">
                <span>با ما در ارتباط باشید:</span>
                {footer.socialLinks.map((social) => (
                  <a key={social.name} href={social.link} className="px-2">
                    <Image
                      src={social.icon}
                      width={24}
                      height={24}
                      alt={social.name}
                    />
                  </a>
                ))}{" "}
              </div>
            </div>
            {/* about */}
            <div className="mt-4 md:mt-0">
              <h3 className="mb-4 text-xl font-bold text-black/87">
                فروشگاه اینترنتی دسترسی
              </h3>
              <p className="leading-7 text-black/60">{footer.about}</p>{" "}
            </div>
            {/* links */}
            <div className="w-full">
              <h3 className="mb-4 text-center text-xl font-bold md:text-right">
                دسترسی سریع
              </h3>

              <ul className="flex flex-col text-sm text-[#777]">
                {footer.quickLinks.map((item) => (
                  <li key={item.title} className="mb-4">
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0058bd] py-3 text-center text-sm font-medium text-white">
        {footer.copyright}
      </div>
    </footer>
  );
}
