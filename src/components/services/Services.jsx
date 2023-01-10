import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";
import data from "../../data.js";
const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services--container">
        {data.services.map(({ id, service, details }) => {
          return (
            <article key={id} className="service">
              <h3 className="service--head">
                <BsCheck className="service--list-icon" />
                {service}
              </h3>
              <ul className="service--list">
                <li>
                  <p>{details}</p>
                </li>
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
