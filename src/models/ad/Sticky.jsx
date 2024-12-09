import Script from "next/script";

export default function StickyBanner() {
  return (
    <>
      <Script async src="https://ad.mail.ru/static/ads-async.js" />
      <ins
        className="trg-b-banner floating"
        style={{ display: "inline-block", position: "fixed", bottom: 0, width: "320px", height: "50px", zIndex: 1000 }}
        data-ad-client="ad-1732551"
        data-ad-slot="1732551"
      ></ins>
      <Script>{`(MRGtag = window.MRGtag || []).push({})`}</Script>
    </>
  );
}
