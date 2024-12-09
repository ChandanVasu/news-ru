import Script from "next/script";

export default function ArticleMidAd() {
  return (
    <>
      <Script async src="https://ad.mail.ru/static/ads-async.js" />
      <ins
        className="mrg-tag"
        style={{ display: "inline-block", width: "300px", height: "250px" }}
        data-ad-client="ad-1737467"
        data-ad-slot="1737467"
      ></ins>
      <Script id="article-mid-ad-script">{`(MRGtag = window.MRGtag || []).push({})`}</Script>
    </>
  );
}
