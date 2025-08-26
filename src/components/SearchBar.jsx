import React from "react";
import { useLocation, Link } from "react-router-dom";
import data from "../data/data.json"; // Adjust path if needed

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchResults = () => {
  const query = useQuery().get("q")?.toLowerCase() || "";

  // Filter movies by title match
  const filteredMovies = data.filter((movie) =>
    movie.title.includes(query)
  );

  return (
    <div className="mt-28 px-4 text-white min-h-screen">
      <h2 className="text-2xl mb-4">
        Search Results for: <span className="text-green-500">{query}</span>
      </h2>

      {filteredMovies.length > 0 ? (
        <ul className="space-y-4">
          {filteredMovies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={`/movie/${movie.slug}`}
                className="text-lg text-green-400 hover:underline"
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
  );
};

export default SearchResults;
