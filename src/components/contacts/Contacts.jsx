import React from "react";
import "./contacts.css";
import { AiFillPhone } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

import data from "../../data.js";
import CardArticle from "./CardArticle";
const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Send the form via EmailJS
    emailjs
      .sendForm(
        "service_d55xof5",
        "template_7f57iz7",
        form.current,
        "4dJp1wIPPsZWEDtgL"
      )
      .then(
        (result) => {
          console.log("Email sent successfully: ", result.text);
          // Reset the form after successful email send
          e.target.reset(); // No need for .then() here
          alert("Email sent. We'll get in touch with you soon.");
        },
        (error) => {
          console.log("Error sending email: ", error.text);
        }
      );
  };
  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contacts</h2>
      <div className="container contact--container">
        <div className="contact--options">
          {data.contacts.map(({ id, icon, title, detail, link }) => {
            return (
              <>
                <CardArticle
                  key={id}
                  icon={icon}
                  detail={detail}
                  title={title}
                  link={link}
                />
              </>
            );
          })}
          <article
            className="contact--option"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>
              <AiFillPhone />
            </h3>
            <h4>Phone</h4>
            <h5>+254742923458</h5>
            <p style={{ color: "#406c91", textAlign: "center", fontSize: 12 }}>
              Give me a call
            </p>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your full name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="You email"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
