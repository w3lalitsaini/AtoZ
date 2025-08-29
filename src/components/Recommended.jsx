import React, { memo } from "react";
import data from "../data/data.json";
import Card from "./Card";
import CarouselSection from "./CarouselSection";

const Recommended = () => {
  const getRandomMovies = (data, count = 6) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const recommendedMovies = getRandomMovies(data, 6);

  return (
    <>
      <CarouselSection
        title="Recommended for you"
        data={recommendedMovies}
        slidesLg={4}
        slidesSm={2}
        Card={Card}
        lazyLoad={true}
      />
    </>
  );
};

export default memo(Recommended);
