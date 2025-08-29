import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AppContent = ({ children }) => {
  const location = useLocation();

  // Track SPA route changes in GA
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-3Z6G7P2322", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // Push AdSense ads on route change
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn("AdSense push error:", e);
    }
  }, [location]);

  return <>{children}</>;
};

export default AppContent;
