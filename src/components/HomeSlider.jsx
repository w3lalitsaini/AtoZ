import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import Button from "./Button";

const HomeSlider = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const featured = data.filter((movie) => movie.featured);
        setFeaturedMovies(featured);
      })
      .catch((err) => console.error("Failed to load data.json:", err));
  }, []);

  if (featuredMovies.length === 0) return null;

  return (
    <div className="w-full px-1 md:px-10 mt-16 md:mt-36">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {featuredMovies.map((movie) => (
          <SwiperSlide key={movie.id} className="!flex justify-center">
            <div className="w-full relative h-[40vh] md:h-[65vh] overflow-hidden shadow-lg">
              <Link to={`/movie/${movie.slug}`} className="block w-full h-full">
                <img
                  src={movie.poster}
                  alt={`${movie.title} movie poster`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />

                <div className="relative z-20 p-6 md:pb-2 text-white h-full flex flex-col justify-end space-y-3 max-w-[80%]">
                  <div className="flex flex-col items-start">
                    <h3 className="text-2xl md:text-4xl font-bold">
                      {movie.title}
                    </h3>
                    <span className="text-yellow-200 text-sm font-bold rounded">
                      ⭐ {movie.rating}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {movie.genres?.map((genre, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-xs px-2 py-1 rounded-md"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-gray-200 line-clamp-3">
                    {movie.description}
                  </p>

                  <Button title="Watch Now" className="mt-1 w-44 text-sm" />
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
