import React, { memo } from "react";
import data from "../data/data.json";
import Card from "./Card";
import CarouselSection from "./CarouselSection";
import Seo from "./Seo";

const Top10 = () => {
  const trendingMovies = data.filter(
    (movie) =>
      Array.isArray(movie.section) && movie.section.includes("trending")
  );

  return (
    <>
      {/* Page-specific SEO */}
      <Seo
        title="Trending Movies | AtoZMovies"
        description="Watch the most trending movies right now. Updated daily with ratings, reviews, and trailers on AtoZMovies."
        url="https://atozmovies.in/"
        image={
          trendingMovies[0]?.poster ||
          "https://atozmovies.in/default-og-image.jpg"
        }
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Trending Movies",
          itemListElement: trendingMovies.map((movie, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: movie.title,
            url: `https://atozmovies.in/movie/${movie.slug}`,
          })),
        }}
      />

      <CarouselSection
        title="Trending Now"
        data={trendingMovies}
        slidesLg={4}
        slidesSm={2}
        Card={Card}
        lazyLoad={true}
      />
    </>
  );
};

export default memo(Top10);
