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

const App = () => {
  return (
    <>
      {/* components */}
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Services />

      <Experience />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
