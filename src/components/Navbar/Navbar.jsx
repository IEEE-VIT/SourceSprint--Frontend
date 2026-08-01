import React from "react";
import { useHistory } from "react-router-dom";
import "./navbar.styles.css";


const Navbar = () => {
  const history = useHistory();
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleRegister = () => {
    history.push("/register");
  };
  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        onClick={() => scrollTo("home")}
      >
        SOURCESPRINT
      </div>

      <div className="navbar-links">
        <button onClick={() => scrollTo("about")}>
          Learn
        </button>

        <button onClick={() => scrollTo("timeline")}>
          Schedule
        </button>

        <button onClick={() => scrollTo("resources")}>
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
    </nav>
  );
};

export default Navbar;