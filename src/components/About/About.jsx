import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-content-card">
          <h1 className="about-text-heading">About SourceSprint</h1>
          <hr className="about-hr"/>
          <p className="about-description">
            SourceSprint is a premier open-source event designed to bridge the gap
            between hobbyist developers and active contributors. Master the tools,
            connect with the community, and jumpstart your open-source journey.
          </p>
          <p className="about-description">
            Gather a deep understanding of why open-source contribution is important, participate in
            interactive hands-on Git workshops, learn from expert industry maintainers, and solve real
            repository issues in our coding sprint to win exciting prizes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;