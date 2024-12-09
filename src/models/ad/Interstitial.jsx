import Script from "next/script";

export default function InterstitialAd() {
  return (
    <>
      <Script async src="https://ad.mail.ru/static/ads-async.js" />
      <ins
        className="mrg-tag"
        data-ad-client="ad-1732553"
        data-ad-slot="1732553"
      ></ins>
      <Script>{`(MRGtag = window.MRGtag || []).push({})`}</Script>
    </>
  );
}
