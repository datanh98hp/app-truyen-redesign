// Import Swiper styles
"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export function SwipperContent() {
  return (
    <div className="mx-auto md:p-0 h-fit">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <SwiperSlide key={index} className="border">
            <div className="h-56">Slide {index + 1}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
