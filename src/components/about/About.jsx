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
            As a software developer, I've spent countless hours experimenting,
            learning, and building real-world solutions. From collaborating with
            teams on dynamic projects to fine-tuning every detail of an app, my
            work revolves around a core belief: There’s always something new to
            learn, and there’s always a better way to do things. Welcome to my
            portfolio, where curiosity meets creativity. Here, you’ll see the
            projects that not only showcase my skills but also my love for
            learning and growing as a developer. If you're interested in working
            together or just want to talk code, let's connect!
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
