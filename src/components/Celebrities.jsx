import React from "react";
import data from "../data/data.json";
import CelebritiesCard from "./CelebritiesCard";
import CarouselSection from "./CarouselSection";

const Celebrities = () => {
  const celebrityMovies = data.filter(
    (movie) => movie.celebritie && typeof movie.celebritie === "object"
  );

  return (
    <CarouselSection
      title="Top Celebrities"
      data={celebrityMovies}
      slidesLg={5} // large screen slides
      slidesSm={2} // small screen slides
      Card={CelebritiesCard}
    />
  );
};

export default Celebrities;
