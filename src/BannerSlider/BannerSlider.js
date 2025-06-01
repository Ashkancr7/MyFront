import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // آیکون‌ها
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

const banners = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 },
];

const BannerSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-5 px-2">
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        {/* دکمه‌های ناوبری */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-3 z-10 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-3 z-10 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronRight size={20} />
        </button>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Pagination, Autoplay, Navigation]}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <img
                src={banner.image}
                alt={`Banner ${banner.id}`}
                className="w-full h-40 sm:h-52 md:h-64 lg:h-72 xl:h-80 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSlider;
