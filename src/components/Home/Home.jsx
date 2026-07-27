import React from "react";
import "./home.css";

import SSLogo from "../../assets/svg/home-svg/ss-logo.png";
import GalaxyBackground from "./GalaxyBackground";

const Home = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleRegister = () => {
    alert("Registration Coming Soon!");
  };

  const handleLogOut = () => {
    localStorage.setItem("isLoggedIn", false);
    window.location.reload();
  };

  const scrollToTimeline = () => {
    document
      .getElementById("timeline")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="home-container">
      <GalaxyBackground />

      <div className="hero-content">
        <img src={SSLogo} alt="SourceSprint" className="sourcesprint-logo" />

        <h1 className="hero-title">SPRINT INTO OPEN SOURCE.</h1>

        <p className="hero-description">
          Learn Git, master GitHub, and make your first contribution at
          SourceSprint. A high-intensity collaborative environment designed to
          bridge the gap between hobbyist and contributor.
        </p>

        <div className="hero-buttons">
          {isLoggedIn === "true" ? (
            <button className="primary-btn" onClick={handleLogOut}>
              LOG OUT
            </button>
          ) : (
            <button className="primary-btn" onClick={handleRegister}>
              REGISTER NOW →
            </button>
          )}

          <button className="secondary-btn" onClick={scrollToTimeline}>
            VIEW SCHEDULE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
