import React from "react";
import "./navbar.styles.css";


const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleRegister = () => {
    alert("Registration opens soon!");
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
        onClick={() => scrollTo("home")}
      >
        REGISTER
      </button>
    </nav>
  );
};

export default Navbar;