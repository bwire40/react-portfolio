import React from "react";

const Article = (props) => {
  return (
    <article className="testimonial">
      <div className="client--avatar">
        <img src={props.image} alt="avatar" />
      </div>
      <div className="client--content">
        <h5 className="client--name">{props.name}</h5>
        <small className="client--review">{props.testimony}</small>
      </div>
    </article>
  );
};

export default Article;
