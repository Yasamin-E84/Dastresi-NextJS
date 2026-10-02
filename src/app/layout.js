import { Vazirmatn } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://yasamin-e84.github.io/Dastresi-NextJS/"),
  title: "دسترسی — بازطراحی فروشگاه با Next.js",
  description:
    "بازسازی واکنش‌گرای رابط فروشگاه دسترسی با Next.js، React، Tailwind CSS و داده‌های ساختاریافته JSON؛ پروژه آموزشی یاسمین سراقی.",
  applicationName: "Dastresi Next.js Interface Study",
  authors: [{ name: "Yasamin Soraghi", url: "https://github.com/Yasamin-E84" }],
  creator: "Yasamin Soraghi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    title: "دسترسی — بازطراحی فروشگاه با Next.js",
    description: "یک فروشگاه واکنش‌گرا و داده‌محور، بازسازی‌شده با Next.js و React.",
    url: "/",
    siteName: "Dastresi Next.js Interface Study",
  },
};
const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col items-center ${vazirmatn.className} relative`}>
        {children}
      </body>
    </html>
  );
}
