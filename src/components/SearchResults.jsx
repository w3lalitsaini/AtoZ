import React from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchResults = () => {
  const query = useQuery().get("q");

  // You would fetch results based on query here
  // For now, just display it
  return (
    <div className="mt-28 px-4 text-white">
      <h2 className="text-2xl mb-4">
        Search Results for: <span className="text-green-500">{query}</span>
      </h2>

      {/* Replace this section with actual API results */}
      <p>
        Here would be your search results based on query:{" "}
        <strong>{query}</strong>
      </p>
    </div>
  );
};

export default SearchResults;
