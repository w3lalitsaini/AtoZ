import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { FaTags } from "react-icons/fa";
import data from "../data/data.json";

const slugify = (str = "") =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const GenrePage = () => {
  // collect unique genres with counts
  const genres = useMemo(() => {
    const map = new Map();
    data.forEach((item) => {
      if (Array.isArray(item.genres)) {
        item.genres.forEach((g) => {
          const key = g.trim();
          map.set(key, (map.get(key) || 0) + 1);
        });
      }
    });

    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count, slug: slugify(name) }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }, []);

  return (
    <div className="px-6 pb-10 mt-16 md:mt-36">
      <div className="flex items-center gap-3 mb-6">
        <FaTags className="text-2xl" />
        <h1 className="text-3xl font-bold text-green-500">Genres</h1>
      </div>

      {genres.length === 0 ? (
        <p className="text-gray-500">No genres found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {genres.map((g) => (
            <Link
              key={g.slug}
              to={`/genre/${g.slug}`}
              className="group rounded-xl border border-gray-400 bg-gradient-to-br from-green-700 via-slate-900 to-gray-900 p-5 hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold group-hover:text-secondary">
                  {g.name}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-green-600">
                  {g.count}
                </span>
              </div>
              <div className="mt-2 text-xs text-gray-400">View titles</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenrePage;
