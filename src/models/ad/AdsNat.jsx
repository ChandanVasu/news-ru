import Script from "next/script";

export default function NativeAd() {
  return (
    <>
      <Script async src="https://ad.mail.ru/static/ads-async.js" />
      <ins
        className="mrg-tag"
        style={{ display: "block", textDecoration: "none" }}
        data-ad-client="ad-1732555"
        data-ad-slot="1732555"
      ></ins>
      <Script id="native-ad-script">{`(MRGtag = window.MRGtag || []).push({})`}</Script>
    </>
  );
}
