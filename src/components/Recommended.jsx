import React, { useRef } from "react";
import Slider from "react-slick";
import data from "../data/data.json"; // Adjust the path if needed
import Card from "./Card"; // Assuming you're using your custom Card component
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recommended = () => {
  const getRandomMovies = (data, count = 6) => {
    // Shuffle the array and return the first `count` movies
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const recommendedMovies = getRandomMovies(data, 6);

  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-10 px-10">
      <h1 className="text-3xl font-semibold text-green-500 border-l-7 pl-3">
        Recommended for you
      </h1>

      {/* Arrow Controls */}
      <div className="flex items-center justify-center md:justify-end gap-8 text-3xl mb-6">
        <FaArrowAltCircleLeft
          onClick={previous}
          className="cursor-pointer text-green-500"
        />
        <FaArrowAltCircleRight
          onClick={next}
          className="cursor-pointer text-green-500"
        />
      </div>

      {/* Slider */}
      <div className="w-full">
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          {recommendedMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recommended;
