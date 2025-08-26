import { useEffect, useRef } from "react";

const SideAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        window.adsbygoogle.push({});
      }
    } catch (err) {
      console.error("AdsbyGoogle error:", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-2610891548777436"
      data-ad-slot="7360636109"
      data-ad-format="auto"
      data-full-width-responsive="true"
      ref={adRef}
    ></ins>
  );
};

export default SideAd;
