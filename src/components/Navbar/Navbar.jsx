import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./navbar.styles.css";


const Navbar = () => {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id) => {
    if (window.location.pathname !== "/") {
      history.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleRegister = () => {
    history.push("/register");
  };

  const handleMobileNav = (action) => {
    setMenuOpen(false);
    action();
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div
        className="navbar-logo"
        onClick={() => {
          if (window.location.pathname !== "/") {
            history.push("/");
          } else {
            setMenuOpen((open) => !open);
          }
        }}
      >
        SOURCESPRINT
      </div>

      <div className="navbar-links">
        <button onClick={() => history.push("/repos")}>
          Repos
        </button>

        <button onClick={() => history.push("/leaderboard")}>
          Leaderboard
        </button>

        <button onClick={() => scrollTo("timeline")}>
          Schedule
        </button>

        <button onClick={() => history.push("/resources")}>
          Resources
        </button>

        <button onClick={() => scrollTo("faq")}>
          FAQ
        </button>
      </div>

      <button
        className="navbar-register"
        onClick={handleRegister}
      >
        REGISTER
      </button>

      {menuOpen && (
        <div className="navbar-mobile-dropdown">
          <button onClick={() => handleMobileNav(() => history.push("/repos"))}>
            Repos
          </button>

          <button onClick={() => handleMobileNav(() => history.push("/leaderboard"))}>
            Leaderboard
          </button>

          <button onClick={() => handleMobileNav(() => scrollTo("timeline"))}>
            Schedule
          </button>

          <button onClick={() => handleMobileNav(() => history.push("/resources"))}>
            Resources
          </button>

          <button onClick={() => handleMobileNav(() => scrollTo("faq"))}>
            FAQ
          </button>

          <button onClick={() => handleMobileNav(handleRegister)}>
            Register
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;