import React from "react";
import HomeSlider from "../components/HomeSlider";
import Trending from "../components/Trending";
import Top10 from "../components/Top10";
import Recommended from "../components/Recommended";
import Celebrities from "../components/Celebrities";
import LatestReview from "../components/LatestReview";
import Seo from "../components/Seo";
import AdBanner from "../components/AdBanner";

const Home = () => {
  return (
    <>
      <Seo
        title="ATOZ Movies - Watch, Review & Discover Movies"
        description="Watch, review and discover the latest, trending and top-rated movies on ATOZ Movies. Get ratings, trailers and recommendations."
        canonical="https://atozmovies.in"
        ogImage="https://atozmovies.in/og-home.jpg"
        ogTitle="ATOZ Movies - Movie Reviews & Ratings"
        ogDescription="Find trending, top-rated and upcoming movies with reviews, ratings and trailers."
        twitterTitle="ATOZ Movies"
        twitterDescription="Discover movies, watch trailers and read reviews."
        twitterImage="https://atozmovies.in/og-home.jpg"
      />

      <HomeSlider />
      <Trending />
      <AdBanner slot="9153983942" />
      <Top10 />
      <Celebrities />
      <LatestReview />
      <AdBanner slot="9153983942" />
      <Recommended />
    </>
  );
};

export default Home;
