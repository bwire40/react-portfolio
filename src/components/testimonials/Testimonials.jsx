import React from "react";
import "./testimonials.css";
import Article from "./Article";
import data from "../../data.js";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonial--container">
        {data.testimonials.map(({ id, name, image, testimony }) => {
          return (
            <Article key={id} name={name} image={image} testimony={testimony} />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
