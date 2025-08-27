import React from "react";
import data from "../data/data.json";
import Card from "./Card";
import CarouselSection from "./CarouselSection";

const Top10 = () => {
  const topMovies = data.filter(
    (movie) => Array.isArray(movie.section) && movie.section.includes("top")
  );

  return (
    <CarouselSection
      title="Top 10 on ATOZ this week"
      data={topMovies}
      slidesLg={4}
      slidesSm={2}
      Card={Card}
    />
  );
};

export default Top10;
