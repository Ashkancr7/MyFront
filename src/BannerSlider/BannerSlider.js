import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import bann from '../assets/banner.jpg'

const banners = [
  { id: 1, image: bann },
  { id: 2, image: bann },
  { id: 3, image: bann },
  { id: 4, image: bann },
  { id: 5, image: bann },
  { id: 6, image: bann },
];

const BannerSlider = () => {
  return (
    <div className="w-full  mx-auto mt-5">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="rounded-lg shadow-2xl"
      >
        {banners.map((banner) => (
          <SwiperSlide onClick={()=> console.log(banner.id)} key={banner.id}>
            <img src={banner.image} alt={`Banner ${banner.id}`} className="w-full  object-contain rounded-lg cursor-pointer" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;