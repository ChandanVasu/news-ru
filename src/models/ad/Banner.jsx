import Script from "next/script";

export default function StickyBanner() {
  return (
    <>
      <Script async src="https://ad.mail.ru/static/ads-async.js" />
      <ins
        className="block fixed bottom-0 m-auto w-[320px] h-[50px] z-10"
        data-ad-client="ad-1732551"
        data-ad-slot="1732551"
      ></ins>
      <Script>{`(MRGtag = window.MRGtag || []).push({})`}</Script>
    </>
  );
}
