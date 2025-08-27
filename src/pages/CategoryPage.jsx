import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Card from "../components/Card";

const ITEMS_PER_PAGE = 12;

const CategoryPage = () => {
  const { slug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const filteredMovies = data.filter(
    (movie) => Array.isArray(movie.category) && movie.category.includes(slug)
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

  // Generate page numbers with ellipsis
  const getPagination = () => {
    const pages = [];

    if (totalPages <= 7) {
      // Show all if few pages
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

  return (
    <div className="px-6 pb-10 mt-16 md:mt-36">
      <h1 className="text-3xl font-bold mb-6 capitalize text-green-600">
        Category: {slug.replace("-", " ")}
      </h1>

      {currentMovies.length > 0 ? (
        <>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentMovies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>

          {/* Pagination */}
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
