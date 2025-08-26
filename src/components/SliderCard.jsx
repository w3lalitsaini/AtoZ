import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const SliderCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.slug}`} className="block">
      <div className="bg-slate-800 rounded shadow overflow-hidden w-full hover:shadow-lg transition cursor-pointer">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-64 w-full object-cover"
        />
        <div className="p-4 text-white space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
              ⭐ {movie.rating}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((genre, index) => (
              <span
                key={index}
                className="bg-slate-700 text-xs px-2 py-1 rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-300 line-clamp-3">
            {movie.description}
          </p>

          <Button title="Watch Now" className="mt-2 w-full text-sm" />
        </div>
      </div>
    </Link>
  );
};

export default SliderCard;
