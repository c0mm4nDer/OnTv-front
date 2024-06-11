import "./globals.css";

import { Roboto } from "next/font/google";
import localFont from "next/font/local";

const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});


const iransans = localFont({
  src: [
      {
          path: "../../public/fonts/woff/IRANSansWeb(FaNum)_UltraLight.woff",
          weight: "100",
          style: "normal",
      },
      {
          path: "../../public/fonts/woff/IRANSansWeb(FaNum)_Light.woff",
          weight: "300",
          style: "normal",
      },
      {
          path: "../../public/fonts/woff/IRANSansWeb(FaNum)_Medium.woff",
          weight: "400",
          style: "normal",
      },
      {
          path: "../../public/fonts/woff/IRANSansWeb(FaNum)_Medium.woff",
          weight: "600",
          style: "normal",
      },
      {
          path: "../../public/fonts/woff/IRANSansWeb(FaNum)_Bold.woff",
          weight: "700",
          style: "normal",
      },
      {
          path: "../../public/fonts/woff/IRANSansWeb(FaNum)_Bold.woff",
          weight: "900",
          style: "normal",
      },
  ],
  variable: "--font-iransans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" className={`${roboto.variable} ${iransans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
