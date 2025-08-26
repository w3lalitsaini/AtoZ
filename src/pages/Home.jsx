import React from "react";
import HomeSlider from "../components/HomeSlider";
import Trending from "../components/Trending";
import Top10 from "../components/Top10";
import Recommended from "../components/Recommended";
import Celebrities from "../components/Celebrities";
import LatestReview from "../components/LatestReview";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Trending/>
      <Top10/>
      <Celebrities/>
      <LatestReview/>
      <Recommended/>
    </>
  );
};

export default Home;
