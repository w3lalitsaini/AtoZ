import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Card = ({ movie }) => {
  return (
    <div className="w-[45vw] sm:w-[250px] h-[40vh] sm:h-[60vh] relative rounded-md overflow-hidden shadow-md border border-gray-500">
      <Link to={`/movie/${movie.slug}`} className="block w-full h-full group">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.poster})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t to-transparent via-transparent from-black z-10 group-hover:via-black/40 " />
        <div className="relative z-20 p-4 text-white h-full flex flex-col justify-end space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <span className="text-yellow-300 text-xs font-bold">
              ⭐ {movie.rating}
            </span>
          </div>

          <div className="flex flex-wrap gap-1">
            {movie.genres?.map((genre, index) => (
              <span
                key={index}
                className="bg-gray-800 text-xs px-2 py-0.5 rounded"
              >
                {genre}
              </span>
            ))}
          </div>

          <p className="text-xs text-gray-300 line-clamp-1">
            {movie.description}
          </p>

          <Button title="Watch Now" className="mt-1 w-full text-xs" />
        </div>
      </Link>
    </div>
  );
};

export default Card;
