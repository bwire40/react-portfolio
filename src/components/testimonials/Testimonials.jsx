import React from "react";
import "./testimonials.css";
/* import Article from "./Article"; */
import data from "../../data.js";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial--container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.testimonials.map(({ id, name, image, testimony }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client--avatar">
                <img src={image} alt="avatar" />
              </div>
              <div className="client--content">
                <h5 className="client--name">{name}</h5>
                <small className="client--review">{testimony}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
