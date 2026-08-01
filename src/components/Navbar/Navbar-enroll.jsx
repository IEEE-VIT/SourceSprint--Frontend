import React from "react";
import { Link } from "react-router-dom";

import "./navbar.styles.css";
import NavLogo from "../../assets/svg/navbar-svg/navbar-logo.svg";


const Navbar = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={NavLogo} alt="" className="navbar-logo" />
      </Link>

      <div className="navbar-links">
        <a href="../#about">About</a>
        <a href="../#instructions">Instructions</a>
        <a href="../#leaderboard">Leaderboard</a>
      </div>
      <div>{/* <Timer expiryTimestamp={time} /> */}</div>
    </nav>
  );
};

export default Navbar;
