import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const CarouselSection = ({ title, data, slidesLg, slidesSm, Card }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full mt-10 px-4 relative">
      {/* Header & Buttons */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold text-green-500 border-l-4 border-green-500 pl-3">
          {title}
        </h1>
        <div className="flex gap-4 text-3xl">
          <FaArrowAltCircleLeft
            ref={prevRef}
            className="cursor-pointer text-green-500 hover:text-green-600 transition"
          />
          <FaArrowAltCircleRight
            ref={nextRef}
            className="cursor-pointer text-green-500 hover:text-green-600 transition"
          />
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: slidesLg },
          0: { slidesPerView: slidesSm },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card movie={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSection;
