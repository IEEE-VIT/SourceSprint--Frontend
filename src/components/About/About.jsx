import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-text-heading">About SourceSprint</h1>
          <hr className="about-hr"/>
          <p className="about-description">
            SourceSprint is a premier open-source event designed to bridge the gap
            between hobbyist developers and active contributors. Master the tools,
            connect with the community, and jumpstart your open-source journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;