import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Card from "../components/Card";

const deslugify = (slug = "") =>
  slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const GenreDetail = () => {
  const { slug } = useParams();
  const label = useMemo(() => deslugify(slug), [slug]);

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
  }, [slug]);

  return (
    <div className="px-6 pb-10 mt-16 md:mt-36">
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
