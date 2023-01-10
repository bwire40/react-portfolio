import React from "react";

const Article = (props) => {
  return (
    <article className="portfolio--item">
      <div className="portfolio--item-image">
        <img src={props.image} alt="" />
      </div>
      <h3>{props.title}</h3>
      <div className="portfolio--item-cta">
        <a href={props.gitLink} className="btn" target="">
          Github
        </a>
        <a
          href={props.demoLink}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default Article;
