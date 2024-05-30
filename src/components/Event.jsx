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
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const images = [
  "/img/photo1.jpg",
  "/img/photo2.jpg",
  "/img/photo3.jpg",
  "/img/photo4.jpg",
  // "/img/photo5.jpg",
  "/img/photo6.jpg",
  "/img/photo7.jpg",
  "/img/photo8.jpg",
  "/img/photo9.jpg",
  "/img/photo10.jpg",
  "/img/photo11.jpg",
  "/img/photo13.jpg",
  "/img/photo14.jpg",
];

function Event() {
  return (
    <div>
      {/* <div className="cont event">
        <div className="cont_title">
          <h3>EVENTS</h3>
        </div>

        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          lazy={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
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
      </div> */}

<div className="cont event">
                <div className="cont_title">
                    <h3>EVENTS</h3>
                </div>
                <div className="cont_gallery">
                    {images.map((image, index) => (
                        <div key={index} className="card">
                            <img src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
    </div>
  );
}

export default Event;
