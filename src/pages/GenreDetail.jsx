import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Seo from "../components/Seo"; // SEO component
import AdBanner from "../components/AdBanner";

const deslugify = (slug = "") =>
  slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const GenreDetail = () => {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const label = useMemo(() => deslugify(slug), [slug]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load data.json:", err));
  }, []);

  const items = useMemo(() => {
    return data.filter(
      (item) =>
        Array.isArray(item.genres) &&
        item.genres.some(
          (g) =>
            g
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "") === slug
        )
    );
  }, [slug, data]);

  return (
    <div className="px-6 pb-10 mt-16 md:mt-36">
      {/* AdSense Banner */}
      <AdBanner slot="9153983942" />

      {/* SEO for genre page */}
      <Seo
        title={`${label} Movies | AtoZMovies`}
        description={`Watch the best ${label} movies on AtoZMovies. Browse trending, top-rated, and latest releases in this genre.`}
        url={`https://atozmovies.in/genres/${slug}`}
        image={items[0]?.poster || "https://atozmovies.in/default-og-image.jpg"}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${label} Movies`,
          description: `A collection of ${label} movies on AtoZMovies.`,
          hasPart: items.map((movie) => ({
            "@type": "Movie",
            name: movie.title,
            url: `https://atozmovies.in/movie/${movie.slug}`,
            image: movie.poster,
          })),
        }}
      />

      <h1 className="text-3xl font-bold mb-6">
        Genre: <span className="text-secondary">{label}</span>
      </h1>

      {items.length === 0 ? (
        <p className="text-gray-500">No titles found for this genre.</p>
      ) : (
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GenreDetail;
