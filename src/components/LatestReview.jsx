import React, { useRef } from "react";
import Slider from "react-slick";
import data from "../data/data.json";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LatestReviewCard from "./LatestReviewCard";

const LatestReview = () => {
  const LatestReviewMovies = data.filter((movie) => movie.latest);

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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 670,
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
        Latest Reviews
      </h1>

      {/* Arrow Controls */}
      <div className="flex items-center justify-center md:justify-end gap-8 mt-2 md:mt-0 text-3xl mb-6">
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
          {LatestReviewMovies.map((movie) => (
            <LatestReviewCard key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestReview;
