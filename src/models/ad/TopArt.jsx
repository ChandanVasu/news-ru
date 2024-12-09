import Script from "next/script";

export default function ArticleTopAd() {
  return (
    <>
      <Script async src="https://ad.mail.ru/static/ads-async.js" />
      <ins
        className="mrg-tag"
        style={{ display: "inline-block", width: "320px", height: "100px" }}
        data-ad-client="ad-1737465"
        data-ad-slot="1737465"
      ></ins>
      <Script id="article-top-ad-script">{`(MRGtag = window.MRGtag || []).push({})`}</Script>
    </>
  );
}
