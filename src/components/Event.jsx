import React from "react";
import "./style.css";
import "./event.css";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';

const images = [
  "/img/photo1.jpg",
  "/img/photo2.jpg",
  "/img/photo3.jpg",
  "/img/photo4.jpg",
  "/img/photo6.jpg",
  "/img/photo7.jpg",
  "/img/photo8.jpg",
  "/img/photo9.jpg",
  "/img/photo11.jpg",
  "/img/photo13.jpg",
  "/img/photo14.jpg",
];

function Event() {
  return (
    <div>
      <div className="cont event">
        <div className="cont_title">
          <h3>EVENTS</h3>
        </div>

        <Swiper
         style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
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
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <>
                <img src={image} className="lazy" alt={`Image ${index + 1}`} loading="lazy" width={300} height={300} />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Event;
