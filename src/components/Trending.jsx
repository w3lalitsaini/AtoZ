import React from "react";
import data from "../data/data.json";
import Card from "./Card";
import CarouselSection from "./CarouselSection";

const Top10 = () => {
  const trendingMovies = data.filter(
    (movie) =>
      Array.isArray(movie.section) && movie.section.includes("trending")
  );

  return (
    <CarouselSection
      title="Trending Now"
      data={trendingMovies}
      slidesLg={4}
      slidesSm={2}
      Card={Card}
    />
  );
};

export default Top10;
