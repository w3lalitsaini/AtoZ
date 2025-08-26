import React from "react";
import { Link } from "react-router-dom";

const CelebritiesCard = ({ movie }) => {
  const { name, image, age, Profession } = movie.celebritie || {};

  return (
    <Link to={`/movie/${movie.slug}`} className="block">
      <div className="p-1 text-center cursor-pointer">
        <div className="flex justify-center mb-1">
          <img
            src={image}
            alt={name}
            className="w-36 h-36 object-cover rounded-full border-3 border-slate-500"
          />
        </div>

        <h2 className="text-xl font-semibold text-white">{name}</h2>

        <div className="flex items-start justify-center gap-4 text-gray-400">
          <p className="text-sm ">Age: {age}</p>
          <p className="text-sm ">{Profession}</p>
        </div>
      </div>
    </Link>
  );
};

export default CelebritiesCard;
