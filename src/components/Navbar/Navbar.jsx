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
          About
        </button>

        <button onClick={() => scrollTo("timeline")}>
          Timeline
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