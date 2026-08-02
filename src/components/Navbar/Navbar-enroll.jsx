import React from "react";
import { useHistory } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  const history = useHistory();
  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        onClick={() => history.push("/")}
      >
        SOURCESPRINT
      </div>

      <div className="navbar-links">
        <button onClick={() => history.push("/")}>
          Home
        </button>
        <button onClick={() => history.push("/leaderboard")}>
          Leaderboard
        </button>
        <button onClick={() => history.push("/resources")}>
          Resources
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
