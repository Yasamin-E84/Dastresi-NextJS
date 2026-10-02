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
    <footer className="mt-16 text-right w-full">
      <div className="bg-[#dedede] py-6">
        <div className="mx-auto flex  max-w-7xl flex-col gap-5 text-sm text-[#777] lg:flex-row lg:items-center lg:justify-evenly">
          <div className="flex flex-col gap-x-3 gap-y-6 px-4 lg:flex-row lg:items-center lg:gap-8">
            <div className="flex w-full items-center gap-2 text-[#777]">
              <PhoneIcon />
              <span>{footer.phone}</span>
            </div>

            <div className="flex w-full items-center gap-2 text-[#777]">
              <ClockIcon />
              <span className="leading-7">{footer.businessHours}</span>
            </div>

            <div className="flex w-full items-center gap-2 text-[#777]">
              <LocationIcon />
              <span className="leading-7">{footer.address}</span>
            </div>

            <BackToTop />
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] py-4">
        <div className="mx-auto max-w-7xl my-8">
          <div className="items-center gap-6 lg:w-[95%] flex flex-wrap justify-center">
            {/* logo */}
            <div className="text-center w-full">
              <Image
                src={footer.logo}
                width={220}
                height={100}
                alt="Dastresi"
                className="mx-auto w-47"
              />

              <div className="mt-8 flex justify-center gap-3 items-center">
                <span>با ما در ارتباط باشید:</span>
                {footer.socialLinks.map((social) => (
                  <a key={social.name} href={social.link}>
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
            <div className="w-full px-5">
              <h3 className="mb-5 text-xl font-bold text-[#111]">
                فروشگاه اینترنتی دسترسی
              </h3>
              <p className="leading-7 text-[#777] text-[16px] max-h-77">
                {footer.about}
              </p>{" "}
            </div>
            {/* links */}
            <div className="w-full">
              <h3 className="mb-4 text-xl font-bold text-[#111] text-center">
                دسترسی سریع
              </h3>

              <ul className="space-y-4 text-[#777] text-sm px-5">
                {footer.quickLinks.map((item) => (
                  <li key={item.title}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0058bd] py-4 text-center text-sm font-bold text-white">
        {footer.copyright}
      </div>
    </footer>
  );
}
