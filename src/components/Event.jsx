import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./event.css"; // Import custom styles if needed

const images = [
  "/img/photo1.jpg",
  "/img/photo2.jpg",
  "/img/photo3.jpg",
  "/img/photo4.jpg",
  "/img/photo5.jpg",
  "/img/photo6.jpg",
  "/img/photo7.jpg",
  "/img/photo8.jpg",
  "/img/photo11.jpg",
  "/img/photo13.jpg",
  "/img/photo14.jpg",
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "20px",
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <div className="carousel-container">
      <h2>Latest Events</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image-container ${
              currentIndex === index ? "active" : "inactive"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
