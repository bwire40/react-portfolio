import React from "react";

const Article = (props) => {
  return (
    <article className="testimonial">
      <div className="client--avatar">
        <img src={props.image} alt="avatar" />
      </div>
    </article>
  );
};

export default Article;
