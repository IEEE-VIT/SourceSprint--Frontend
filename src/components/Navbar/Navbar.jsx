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
        <button onClick={() => scrollTo("timeline")}>
          Schedule
        </button>

        <button onClick={() => scrollTo("about")}>
          Learn
        </button>

        <button onClick={() => scrollTo("sprint")}>
          Contribute
        </button>
        <button onClick={() => (window.location.href = "/leaderboard")}>
          Leaderboard
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