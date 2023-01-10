import React from "react";
import "./experience.css";
import { HiBadgeCheck } from "react-icons/hi";
import data from "../../data.js";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience--container">
        <div className="experience--frontend">
          <h3>Frontend Development</h3>
          <div className="experience--content">
            {data.skillsFront.map(({ id, title, status }) => {
              return (
                <article key={id} className="experience--details">
                  <HiBadgeCheck className="experience--details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{status}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience--backend">
          <h3>Backend Development</h3>
          <div className="experience--content">
            {data.skillsBack.map(({ id, title, status }) => {
              return (
                <article key={id} className="experience--details">
                  <HiBadgeCheck className="experience--details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{status}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
