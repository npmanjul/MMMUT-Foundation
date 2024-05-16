import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay,Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/homepagepic1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Homepagepic2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/homepagepic3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Homepagepic4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/homepagepic6.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/homepagepic7.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/homepagepic8.jpeg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
