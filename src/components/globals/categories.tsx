"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

export function Categories() {
  const images = [
    { src: "01.avif", label: "Fresh Chicken 1" },
    { src: "02.jpg", label: "Fresh Chicken 2" },
    { src: "03.webp", label: "Fresh Chicken 3" },
    { src: "04.jpg", label: "Fresh Chicken 4" },
    { src: "05.jpg", label: "Fresh Chicken 5" },
    { src: "06.webp", label: "Fresh Chicken 6" },
  ];

  return (
    <main className="bg-red-500 h-screen">
      <div>
        <h1 className="text-center font-sans text-4xl pt-12 pb-4 font-bold">
          Categories
        </h1>
        <div className="text-center font-serif text-white text-5xl font-bold">
          <h1>Enjoy Delicious Organic</h1>
          <h1>Raw Chicken</h1>
        </div>
      </div>
      <div className="w-full mt-4 h-1/2 rounded-lg object-cover">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          centeredSlides={true}
          coverflowEffect={{
            stretch: 20,
            rotate: 0,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="object-fill rounded-lg h-full"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full  w-full">
                <img
                  src={image.src}
                  alt=""
                  className="rounded-lg h-full w-full object-cover "
                />
                <div className="absolute bottom-0 bg-black bg-opacity-50 text-white  p-2 rounded w-full text-center font-semibold">
                  {image.label}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}

export default Categories;
