import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './carousal.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
         <Swiper
        spaceBetween={700}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
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
