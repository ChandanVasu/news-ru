import Script from "next/script";

export default function CategoryTopAd() {
  return (
    <>
      <Script async src="https://ad.mail.ru/static/ads-async.js" />
      <ins
        className="mrg-tag"
        style={{ display: "inline-block", width: "320px", height: "100px" }}
        data-ad-client="ad-1737469"
        data-ad-slot="1737469"
      ></ins>
      <Script id="category-top-ad-script">{`(MRGtag = window.MRGtag || []).push({})`}</Script>
    </>
  );
}
