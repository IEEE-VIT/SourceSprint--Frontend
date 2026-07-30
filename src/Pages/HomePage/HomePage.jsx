import React from "react";
import { Route } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Timeline from "../../components/Timeline/Timeline";
import FAQ from "../../components/FAQs/faq";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Route exact to="/home" component={Home}/>
        <Route exact to="/about" component={About}/>
        <Route exact to="/timeline" component={Timeline}/>
        <Route exact to="/faq" component={FAQ}/>
        <Route exact to="/footer" component={Footer}/>
      </div>
    </div>
  );
};
export default HomePage;
