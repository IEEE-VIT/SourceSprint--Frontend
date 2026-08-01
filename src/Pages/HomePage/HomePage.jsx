import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Timeline from "../../components/Timeline/Timeline";
import FAQ from "../../components/FAQs/faq";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="App">
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div className="content">
        <Home />
        <About />
        <Timeline />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
