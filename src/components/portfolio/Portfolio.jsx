import React from "react";
import "./portfolio.css";

import data from "../../data.js";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <Swiper
        className="container portfolio--container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.projects.map(
          ({ id, image, title, gitLink, demoLink, description }) => {
            return (
              <SwiperSlide key={id} className="portfolio--item">
                <div className="portfolio--item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="portfolio--item-cta">
                  <a href={gitLink} className="btn" target="">
                    Github
                  </a>
                  <a
                    href={demoLink}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default Portfolio;
