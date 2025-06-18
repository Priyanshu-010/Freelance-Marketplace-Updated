import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Slide.scss";

const Slide = ({ children, slidesToShow }) => {
  return (
    <div className="slide">
      <div className="container">
        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesToShow}
          navigation={children.length > slidesToShow} // Only show arrows if necessary
          spaceBetween={20}
        >
          {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index}>
              <div className="slide-wrapper">{child}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
