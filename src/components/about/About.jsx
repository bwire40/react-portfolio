import React from "react";
import ME from "../../assets/me.jpeg";
import "./about.css";
import data from "../../data";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about--container">
        <div className="about--me">
          <img src={ME} alt="me" className="about--me-image" />
        </div>
        <div className="about--content">
          <div className="about--cards">
            {data.experience.map(({ id, icon, title, detail }) => {
              return (
                <article key={id} className="about--card">
                  {icon}
                  <h5>{title}</h5>
                  <small>{detail}</small>
                </article>
              );
            })}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ultrices eu ante at tincidunt. Ut interdum eros eu diam mollis, id
            facilisis ipsum hendrerit. Quisque nec mauris dui. Nam pulvinar sem
            ut dignissim interdum.
          </p>
          <a href="#contacts" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
