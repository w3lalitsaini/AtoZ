import React, { useEffect, useState } from "react";
import LatestReviewCard from "./LatestReviewCard";
import CarouselSection from "./CarouselSection";

const LatestReview = () => {
  const [latestReviewMovies, setLatestReviewMovies] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((movie) => movie.latest);
        setLatestReviewMovies(filtered);
      })
      .catch((err) => console.error("Failed to load data.json:", err));
  }, []);

  if (latestReviewMovies.length === 0) return null; // optional: hide if no data

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
