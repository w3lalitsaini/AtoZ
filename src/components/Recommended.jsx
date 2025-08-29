import React, { useEffect, useState, memo } from "react";
import Card from "./Card";
import CarouselSection from "./CarouselSection";

const Recommended = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const getRandomMovies = (data, count = 6) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setRecommendedMovies(getRandomMovies(data, 6));
      })
      .catch((err) => console.error("Failed to load data.json:", err));
  }, []);

  if (recommendedMovies.length === 0) return null; // optional: hide until loaded

  return (
    <CarouselSection
      title="Recommended for you"
      data={recommendedMovies}
      slidesLg={4}
      slidesSm={2}
      Card={Card}
      lazyLoad={true}
    />
  );
};

export default memo(Recommended);
