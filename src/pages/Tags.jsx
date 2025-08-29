import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import AdBanner from "../components/AdBanner";

const ITEMS_PER_PAGE = 12;

const Tags = () => {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to fetch data.json:", err));
  }, []);

  const filteredMovies = data.filter(
    (movie) => Array.isArray(movie.genres) && movie.genres.includes(slug)
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

  return (
    <div className="px-6 pb-10 mt-16 md:mt-36">
      <AdBanner slot="9153983942" />

      <h1 className="text-3xl font-bold mb-6 capitalize text-green-600">
        Tag: {slug.replace("-", " ")}
      </h1>

      {currentMovies.length > 0 ? (
        <>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentMovies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>

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
        <p className="text-gray-500">No movies found in this Tag.</p>
      )}
    </div>
  );
};

export default Tags;
