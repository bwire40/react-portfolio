import React from "react";
import ME from "../../assets/cms.jpg";
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
            An IT enthusiast passionate about software development and its
            related entities. I enjoy working collaboratively but can also run
            with projects independently. I am a Problem solver and a strong
            communicator, eager to show-case my talents and add value. I’m also
            motivated to advance and expand my skill set through targeted
            mentorship and challenging projects.
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
