import React from "react";
import { FaStar } from "react-icons/fa";

const LatestReviewCard = ({ movie }) => {
  return (
    <div className="max-w-xl w-full h-72 flex gap-6 bg-slate-800 shadow-md p-2 rounded-md">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-52 h-full object-cover rounded-md"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-semibold text-white">{movie.title}</h2>
          <p className="text-lg text-gray-400 mb-4">{movie.releaseYear}</p>
          <div className="flex items-center gap-2 text-lg text-amber-200 mb-2">
            <FaStar className="text-yellow-500 mr-1" />
            {movie.rating}
          </div>
          <p className="text-md text-gray-300 line-clamp-3">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestReviewCard;
