import React from "react";
import CTA from "./CTA";
/* import ME from '../../assets/me.jpeg' */
import Headersocials from "./Headersocials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header--container">
        <h4>Hello I'm</h4>
        <h1>Emmanuel Bwire</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <div className="me">{/* <img src='' alt="me" /> */}</div>

        <a href="#contacts" className="scroll--down">
          Scroll Down
        </a>
        <Headersocials />
      </div>
    </header>
  );
};

export default Header;
