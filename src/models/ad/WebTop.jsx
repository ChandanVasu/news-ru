import Script from "next/script";

export default function WebTopBanner() {
  return (
    <>
      <Script async src="https://ad.mail.ru/static/ads-async.js" />
      <ins
        className="mrg-tag"
        style={{ display: "inline-block", width: "320px", height: "100px" }}
        data-ad-client="ad-1733392"
        data-ad-slot="1733392"
      ></ins>
      <Script id="web-top-banner-script">{`(MRGtag = window.MRGtag || []).push({})`}</Script>
    </>
  );
}
