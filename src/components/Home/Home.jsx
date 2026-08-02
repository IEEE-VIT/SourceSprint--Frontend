import React from "react";
import { useHistory } from "react-router-dom";
import "./home.css";

import SSLogo from "../../assets/svg/home-svg/ss-logo.png";

const Home = () => {
  const history = useHistory();

  const handleRegisterClick = () => {
    history.push("/register");
  };

  const handleGithubLogin = () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
    window.location.href = `${backendUrl}/github/login`;
  };

  return (
    <section id="home" className="home-container">
      <div className="hero-content">
        <img src={SSLogo} alt="SourceSprint" className="sourcesprint-logo" />

        <h1 className="hero-title">SPRINT INTO OPEN SOURCE.</h1>

        <p className="hero-description">
          Learn Git, master GitHub, and make your first contribution at
          SourceSprint. A high-intensity collaborative environment designed to
          bridge the gap between hobbyist and contributor.
        </p>

        {/* Action Buttons matching Image 1 */}
        <div className="hero-buttons">
          <button className="primary-btn-sharp" onClick={handleRegisterClick}>
            REGISTER NOW &gt;
          </button>
          <button className="secondary-btn-sharp" onClick={handleGithubLogin}>
            LOGIN WITH GITHUB &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
