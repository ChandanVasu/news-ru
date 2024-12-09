import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer";
import Script from "next/script";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Новостной портал",
  description:
    "We strive to provide our readers with the most relevant and reliable news 24 hours a day. Our team of professional journalists works around the clock to keep you informed about the most important events in Russia and the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased light body-bg-color`}>
        {children}

        {/* Footer */}
        <Footer />

        {/* Sticky Banner */}
        <Script async src="https://ad.mail.ru/static/ads-async.js"></Script>
        <ins
          className="trg-b-banner floating fixed bottom-0 left-0 right-0 z-50 w-full h-[50px] bg-white shadow-lg"
          style={{ display: "inline-block" }}
          data-ad-client="ad-1732551"
          data-ad-slot="1732551"
        ></ins>
        <Script id="sticky-banner-init">
          {`(MRGtag = window.MRGtag || []).push({});`}
        </Script>
      </body>
    </html>
  );
}
