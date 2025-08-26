import React, { useEffect, useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import Fuse from "fuse.js";
import moviesData from "../data/data.json"; // your movie list

const fuse = new Fuse(moviesData, {
  keys: ["title"],
  threshold: 0.4,
  includeScore: true,
});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const queryParam = useQuery().get("q") || "";
  const [query, setQuery] = useState(queryParam);
  const [results, setResults] = useState([]);
  const timeoutRef = useRef(null);

  const performSearch = (value) => {
    if (value.trim() === "") {
      setResults([]);
      return;
    }
    const fuseResults = fuse.search(value).map((r) => r.item);
    setResults(fuseResults);
  };

  useEffect(() => {
    // Do fuzzy search when queryParam changes (on page load or search bar redirect)
    setQuery(queryParam);
    performSearch(queryParam);
  }, [queryParam]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => performSearch(value), 300); // debounce
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Search Results</h2>

      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search movies..."
        className="w-full px-4 py-2 mb-4 rounded-md bg-slate-700 text-white outline-none"
      />

      {results.length > 0 ? (
        <ul className="grid md:grid-cols-2 gap-4">
          {results.map((movie) => (
            <li
              key={movie.id}
              className="flex items-start gap-4 p-3 bg-white rounded-md shadow hover:shadow-md transition"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-24 h-36 object-cover rounded"
              />
              <div>
                <Link
                  to={`/movie/${movie.slug}`}
                  className="text-lg font-semibold hover:underline"
                >
                  {movie.title}
                </Link>
                <p className="text-sm text-gray-700">{movie.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white text-center mt-8">No movies found.</p>
      )}
    </div>
  );
};

export default SearchResults;
