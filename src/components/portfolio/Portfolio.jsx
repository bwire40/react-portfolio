import React from "react";
import "./portfolio.css";
import Article from "./Article";

import data from "../../data.js";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio--container">
        {data.projects.map(({ id, image, title, gitLink, demoLink }) => {
          return (
            <Article
              key={id}
              image={image}
              title={title}
              gitLink={gitLink}
              demoLink={demoLink}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
