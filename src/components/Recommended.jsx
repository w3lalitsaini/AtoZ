import React from "react";
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
    <CarouselSection
      title="Recommended for you"
      data={recommendedMovies}
      slidesLg={4} // Large screen = 4 cards
      slidesSm={2} // Mobile = 2 cards
      Card={Card}
    />
  );
};

export default Recommended;
