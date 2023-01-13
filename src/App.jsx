import React from "react";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import Contacts from "./components/contacts/Contacts";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import { useState } from "react";

const App = () => {
  const [dark, setDark] = useState(false);
  const handleDarkMode = (e) => {
    setDark((prev) => !prev);
  };
  return (
    <div className={dark ? "main--container dark" : "main--container"}>
      {/* components */}
      <Header />
      <Nav darkProp={dark} handleDarkMode={handleDarkMode} />
      <About />
      <Portfolio />
      <Services />

      <Experience />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
