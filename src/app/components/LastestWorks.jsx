"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaEye, FaLink } from "react-icons/fa";
import { RiCursorFill } from "react-icons/ri";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const LastestWorks = () => {
  const data = [
    "/images/latest_work01.jpg",
    "/images/latest_work02.jpg",
    "/images/latest_work03.jpg",
    "/images/latest_work04.jpg",
    "/images/latest_work01.jpg",
    "/images/latest_work02.jpg",
  ];
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const sliderRef = useRef(null);
  return (
    <div className="my-5 w-full">
      <div className="relative mx-auto w-full border-b-2 border-c-header px-2 pb-10 lg:w-screen lg:px-0">
        <div className="flex items-center gap-3">
          <RiCursorFill className="h-7 w-7 text-c-blue" />
          <h1 className="font-bold uppercase">Lastest Works</h1>
        </div>
        <Swiper
          navigation={{ prevEl: prev, nextEl: next }}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="mt-4"
          ref={sliderRef}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {data.map((image, i) => (
            <SwiperSlide key={i} className="group relative">
              <img src={image} alt="" className="w-full" />
              <div className="absolute bottom-0 hidden h-16 w-full items-center justify-center gap-5 bg-c-blue text-white group-hover:flex">
                <FaEye className="h-10 w-10"></FaEye>
                <FaLink className="h-8 w-8"></FaLink>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute right-0 top-0 flex gap-3">
          <div
            className="text rounded-full bg-c-blue p-2 hover:opacity-20"
            ref={(node) => setPrev(node)}
          >
            <FaArrowLeft></FaArrowLeft>
          </div>
          <div
            className="text rounded-full bg-c-blue p-2 hover:opacity-20"
            ref={(node) => setNext(node)}
          >
            <FaArrowRight></FaArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestWorks;
