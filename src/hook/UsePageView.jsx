// usePageView.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-3Z6G7P2322", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

export default usePageView;
