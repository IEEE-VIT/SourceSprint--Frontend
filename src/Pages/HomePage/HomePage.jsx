import React from "react";
import { Route } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import InstructionsSet from "../../components/InstructionsSet/InstructionsSet";
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
import Footer from "../../components/Footer/Footer";
import Coffee from "../../components/Coffee/coffee";
import FAQ from "../../components/FAQs/faq";
import Sprint from "../../components/Sprint/sprint";
import Sponsor from "../../components/Sponsor/Sponsor";
import Timeline from "../../components/Timeline/Timeline";
const HomePage = () => {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Route exact to="/home" component={Home} />
        <Route exact to="/about" component={About} />
        <Route exact to="/sponsor" component={Sponsor} />
        <Route exact to="/timeline" component={Timeline} />
        <Route exact to="/instructions" component={InstructionsSet} />
        <Route exact to="/coffee" component={Coffee} />
        <Route exact to="/sprint" component={Sprint} />
        <Route exact to="/faq" component={FAQ} />

        <Route exact to="/footer" component={Footer} />
      </div>
    </div>
  );
};
export default HomePage;
