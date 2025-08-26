import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import Button from "./Button";

const HomeSlider = () => {
  const featuredMovies = data.filter((movie) => movie.featured);

  return (
    <div className="w-full px-10 mt-2">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {featuredMovies.map((movie) => (
          <SwiperSlide key={movie.id} className="!flex justify-center">
            <div className="w-full  relative h-[65vh] overflow-hidden shadow-lg">
              <Link to={`/movie/${movie.slug}`} className="block w-full h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${movie.poster})` }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t to-transparent via-transparent from-gray-900 z-10" />
                <div className="w-80 h-full">
                  <div className="relative z-20 p-6 pb-2 text-white h-full flex flex-col justify-end space-y-3">
                    <div className="flex flex-col items-start">
                      <h3 className="text-2xl font-bold">{movie.title}</h3>
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

                    <p className="text-sm text-gray-200 line-clamp-3">
                      {movie.description}
                    </p>

                    <Button title="Watch Now" className="mt-1 w-44 text-sm " />
                  </div>
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
