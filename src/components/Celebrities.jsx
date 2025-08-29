import React, { useEffect, useState } from "react";
import CelebritiesCard from "./CelebritiesCard";
import CarouselSection from "./CarouselSection";

const Celebrities = () => {
  const [celebrityMovies, setCelebrityMovies] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (movie) => movie.celebritie && typeof movie.celebritie === "object"
        );
        setCelebrityMovies(filtered);
      })
      .catch((err) => console.error("Failed to load data.json:", err));
  }, []);

  if (celebrityMovies.length === 0) return null; // Optional: hide if no data

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
