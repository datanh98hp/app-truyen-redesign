// Import Swiper styles
"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export function SwipperContent() {
  return (
    <div className="max-w-screen h-fit md:w-6xl w-xl mx-2 md:mx-0">
      <Swiper
       spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <SwiperSlide key={index} className="border ">
            <div className="h-56">Slide {index + 1}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
