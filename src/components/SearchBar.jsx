import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";

const SearchBar = ({ placeholder = "Search...", className = "" }) => {
  const [data, setData] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const timeoutRef = useRef(null);
  const containerRef = useRef();

  // Fetch data.json dynamically
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setFuse(
          new Fuse(json, {
            keys: ["title"],
            threshold: 0.4,
            includeScore: true,
          })
        );
      })
      .catch((err) => console.error("Failed to fetch data.json:", err));
  }, []);

  // Debounced search
  const handleSearch = (value) => {
    setQuery(value);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (!fuse || value.trim() === "") {
        setResults([]);
        return;
      }
      const fuseResults = fuse.search(value).map((r) => r.item);
      setResults(fuseResults);
    }, 300);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full max-w-md ${className}`}>
      <div className="flex items-center bg-slate-700 rounded-md px-2 py-1">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="bg-transparent outline-none px-2 py-1 text-white placeholder:text-white w-full"
        />
        <span className="text-white">🔍</span>
      </div>

      {results.length > 0 && (
        <ul className="absolute left-0 right-0 bg-slate-950 px-4 text-white mt-4 scrollbar-hide rounded shadow-md max-h-[80vh] overflow-auto z-50">
          {results.map((movie) => (
            <li key={movie.id} className="rounded-md hover:bg-gray-800">
              <Link
                to={`/movie/${movie.slug}`}
                className="flex gap-3 p-2 items-center"
                onClick={() => {
                  setQuery("");
                  setResults([]);
                }}
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-20 h-24 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold">{movie.title}</h4>
                  <h4 className="font-semibold">{movie.year}</h4>
                  <p className="text-sm line-clamp-2">{movie.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
