// Import Swiper styles
"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Story } from "../types/types";


export function SwipperContent({ data }: { data: Story[] }) {
  //get latest stories from api
  const handleOnClickItem = () => {};
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
          0: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 4,
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
        {data.map((item, index) => (
          <SwiperSlide key={index} className="">
            <div className="h-full chapter-item" onClick={handleOnClickItem}>
              <Image
                src="/assets/thumb.png"
                alt="image"
                width={190}
                height={247}
                sizes="(max-width: 168px) 100vw, (max-width: 247px) 50vw, 33vw"
                className="w-full border rounded-sm"
              />
              <div className="">
                <p className="p-2 font-semibold font-quicksand truncate hover:underline hover:text-orange-500  dark:text-amber-50 cursor-pointer">
                  {item.title}
                </p>
                <p className="font-semibold font-quicksand text-center hover:underline hover:text-orange-500 dark:hover:text-amber-50 dark:text-amber-50 cursor-pointer">
                  {item.chapters?.length} chapter
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
