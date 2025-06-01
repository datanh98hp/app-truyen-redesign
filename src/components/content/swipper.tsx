// Import Swiper styles
"use client";
import Image from "next/image";
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
            slidesPerView: 4 ,
            spaceBetween: 2,
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
          <SwiperSlide key={index} className="">
            <div className="h-full chapter-item">
              <Image
                src="/assets/thumb.png"
                alt="image"
                width={190}
                height={247}
                sizes="(max-width: 168px) 100vw, (max-width: 247px) 50vw, 33vw"
                className="w-xl border rounded-sm"
              />
              <div className="">
                <p className="my-2 font-semibold font-quicksand truncate hover:underline hover:text-orange-500  dark:text-amber-50 cursor-pointer">
                  title asfjpj fpaspf kfi0afafo jfofjoafw jofj-fj-afjf- {index}
                </p>
                <p className="font-semibold font-quicksand text-center hover:underline hover:text-orange-500 dark:hover:text-amber-50 dark:text-amber-50 cursor-pointer">
                  Chương {index}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
