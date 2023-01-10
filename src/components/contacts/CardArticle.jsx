/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const CardArticle = (props) => {
  return (
    <article className="contact--option">
      <h3 className="contact--option-icon">{props.icon}</h3>
      <h4>{props.title}</h4>
      <h5>{props.detail}</h5>
      <a href={props.link} alt="mail-link" target="_blank" rel="noreferrer">
        Send a Message
      </a>
    </article>
  );
};

export default CardArticle;
