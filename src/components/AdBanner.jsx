import { useEffect, useRef } from "react";

const AdBanner = ({ slot }) => {
  const adRef = useRef();

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdsbyGoogle error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-2610891548777436" // your ID
      data-ad-slot={slot} // from AdSense dashboard
      data-ad-format="auto"
      data-full-width-responsive="true"
      ref={adRef}
    ></ins>
  );
};

export default AdBanner;
