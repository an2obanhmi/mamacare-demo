import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './HomeSlider.css';

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'ease-in-out',
  };

  return (
    <div className="home-slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="/assets/banner-center.jpg"
            alt="Slide 1"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="/assets/banner-center2.jpg"
            alt="Slide 2"
            className="carousel-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider; 