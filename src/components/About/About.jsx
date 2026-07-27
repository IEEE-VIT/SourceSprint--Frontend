import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-left-col">
          <h1 className="about-text-heading">About SourceSprint</h1>
          <hr className="about-hr"/>
          <p className="about-description">
            SourceSprint is a premier open-source event organized by IEEE-VIT,
            designed to bridge the gap between hobbyist developers and active
            contributors. Master the tools, connect with the community, and jumpstart
            your open-source journey.
          </p>
        </div>
        
        <div className="about-right-col">
          <div className="about-card">
            <h3 className="about-card-title">Git & GitHub Workshop</h3>
            <p className="about-card-text">
              Master version control and collaboration through an interactive, hands-on learning session.
            </p>
          </div>
          
          <div className="about-card">
            <h3 className="about-card-title">Expert Speakers</h3>
            <p className="about-card-text">
              Get inspired by talks from prominent leaders and maintainers in the global open-source ecosystem.
            </p>
          </div>
          
          <div className="about-card">
            <h3 className="about-card-title">SourceSprint Contest</h3>
            <p className="about-card-text">
              Solve real-world issues and merge PRs across diverse project domains in a high-intensity sprint.
            </p>
          </div>
          
          <div className="about-card">
            <h3 className="about-card-title">Exciting Prizes</h3>
            <p className="about-card-text">
              Climb the leaderboard, make high-quality contributions, and win exclusive rewards and swag.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;