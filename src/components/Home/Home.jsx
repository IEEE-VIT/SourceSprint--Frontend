import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { isRegistered, markRegistered } from "../../utils/session";
import "./home.css";

import SSLogo from "../../assets/svg/home-svg/ss-logo.png";

const Home = () => {
  const history = useHistory();

  // Whether this browser has registered (fresh registration or "already exists").
  // Gates step ② below. `unlocked` also flips true via the escape hatch, so a
  // cross-device user who registered elsewhere is never truly trapped.
  const [unlocked, setUnlocked] = useState(isRegistered());

  const handleRegisterClick = () => {
    history.push("/register");
  };

  const handleGithubLogin = () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
    window.location.href = `${backendUrl}/github/login`;
  };

  const handleEscapeUnlock = () => {
    // The user says they've already registered (e.g. on another device). Trust
    // them, remember it, and unlock — this is guidance, not enforcement.
    markRegistered();
    setUnlocked(true);
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

        {/* Two-step flow: register first, then link GitHub. */}
        <div className="hero-buttons">
          <button className="primary-btn-sharp" onClick={handleRegisterClick}>
            <span className="step-num">1</span>
            REGISTER NOW &gt;
          </button>

          <div className="link-step">
            <button
              className={`secondary-btn-sharp ${unlocked ? "" : "is-locked"}`}
              onClick={handleGithubLogin}
              disabled={!unlocked}
              aria-disabled={!unlocked}
            >
              <span className="step-num">2</span>
              LINK YOUR GITHUB &gt;
            </button>
            {!unlocked && (
              <span className="link-step-hint">
                Register first to unlock ·{" "}
                <button type="button" className="link-step-escape" onClick={handleEscapeUnlock}>
                  Already registered?
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
