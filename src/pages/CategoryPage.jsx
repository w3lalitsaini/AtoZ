import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Card from "../components/Card";
import Seo from "../components/Seo";
import AdBanner from "../components/AdBanner";

const ITEMS_PER_PAGE = 12;

const CategoryPage = () => {
  const { slug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  // Filter only once using useMemo for performance
  const filteredMovies = useMemo(
    () =>
      data.filter(
        (movie) =>
          Array.isArray(movie.category) && movie.category.includes(slug)
      ),
    [slug]
  );

  const totalPages = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMovies = filteredMovies.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate pagination buttons
  const getPagination = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 4) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 3) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const categoryName = slug.replace("-", " ");

  return (
    <div className="px-6 pb-10 mt-16 md:mt-36">
      <AdBanner slot="9153983942" />
      {/* ✅ SEO Meta Tags */}
      <Seo
        title={`${categoryName} Movies | AtoZMovies`}
        description={`Watch the best ${categoryName} movies on AtoZMovies. Browse trending, top-rated, and latest releases in this category.`}
        url={`https://atozmovies.in/category/${slug}`} // updated
        image={
          filteredMovies[0]?.poster ||
          "https://atozmovies.in/default-og-image.jpg"
        }
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${categoryName} Movies`,
          description: `A collection of ${categoryName} movies on AtoZMovies.`,
          hasPart: filteredMovies.map((movie) => ({
            "@type": "Movie",
            name: movie.title,
            url: `https://atozmovies.in/movie/${movie.slug}`,
            image: movie.poster,
          })),
        }}
      />

      <h1 className="text-3xl font-bold mb-6 capitalize text-green-600">
        Category: {categoryName}
      </h1>

      {currentMovies.length > 0 ? (
        <>
          {/* ✅ Lazy-loaded movie cards */}
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentMovies.map((movie) => (
              <Card key={movie.id} movie={movie} lazyLoad={true} />
            ))}
          </div>

          {/* ✅ Pagination */}
          <div className="mt-10 flex justify-center gap-2 flex-wrap">
            {getPagination().map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  typeof item === "number" && handlePageChange(item)
                }
                disabled={item === "..."}
                className={`px-4 py-2 rounded-md border text-sm font-semibold ${
                  currentPage === item
                    ? "bg-green-600 text-white"
                    : item === "..."
                    ? "cursor-default text-gray-500 border-none"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      ) : (
        <p className="text-gray-500">No movies found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
