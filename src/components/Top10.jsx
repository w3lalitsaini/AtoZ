import React, { memo } from "react";
import data from "../data/data.json";
import Card from "./Card";
import CarouselSection from "./CarouselSection";
import Seo from "./Seo";

const Top10 = () => {
  const topMovies = data.filter(
    (movie) => Array.isArray(movie.section) && movie.section.includes("top")
  );

  return (
    <>
      {/* SEO for Top 10 movies */}
      <Seo
        title="Top 10 Movies This Week | AtoZMovies"
        description="Discover the top 10 most-watched movies this week on AtoZMovies. Updated weekly with ratings, reviews, and trailers."
        url="https://atozmovies.in/" // changed from canonical to url
        image={
          topMovies[0]?.poster || "https://atozmovies.in/default-og-image.jpg"
        }
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Top 10 Movies This Week",
          itemListElement: topMovies.map((movie, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: movie.title,
            url: `https://atozmovies.in/movie/${movie.slug}`,
          })),
        }}
      />

      <CarouselSection
        title="Top 10 on ATOZ this week"
        data={topMovies}
        slidesLg={4}
        slidesSm={2}
        Card={Card}
        lazyLoad={true}
      />
    </>
  );
};

export default memo(Top10);
