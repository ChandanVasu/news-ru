import Script from "next/script";

export default function CategoryMidAd() {
  return (
    <>
      <Script async src="https://ad.mail.ru/static/ads-async.js" />
      <ins
        className="mrg-tag"
        style={{ display: "inline-block", width: "320px", height: "100px" }}
        data-ad-client="ad-1737471"
        data-ad-slot="1737471"
      ></ins>
      <Script>{`(MRGtag = window.MRGtag || []).push({})`}</Script>
    </>
  );
}
