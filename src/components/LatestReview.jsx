import React from "react";
import data from "../data/data.json";
import LatestReviewCard from "./LatestReviewCard";
import CarouselSection from "./CarouselSection";

const LatestReview = () => {
  const latestReviewMovies = data.filter((movie) => movie.latest);

  return (
    <CarouselSection
      title="Latest Reviews"
      data={latestReviewMovies}
      slidesLg={2}
      slidesSm={1}
      Card={LatestReviewCard}
    />
  );
};

export default LatestReview;
