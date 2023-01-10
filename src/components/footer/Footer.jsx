/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer--logo">
        Manu
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className="footer--socials">
        <a href="https://www.facebook.com">
          <RiFacebookCircleFill />
        </a>
        <a href="https://www.instagram.com">
          <BsInstagram />
        </a>
        <a href="https://www.twitter.com">
          <BsTwitter />
        </a>
      </div>
      <div className="footer--copyright">
        <small>&copy;Emmanuel Bwire 2023. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
