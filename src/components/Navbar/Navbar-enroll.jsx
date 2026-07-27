import React from "react";
import { Link } from "react-router-dom";

import "./navbar.styles.css";
import NavLogo from "../../assets/svg/navbar-svg/navbar-logo.svg";


const Navbar = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <nav>
      <Link to="/">
        <img src={NavLogo} alt="" className="nav-logo" />
      </Link>

      <div className="nav-links">
        <div>
          <a href="../#about">About</a>
        </div>
        <div>
          <a href="../#instructions">Instructions</a>
        </div>
        <div>
          <a href="../#leaderboard">Leaderboard</a>
        </div>
      </div>
      {/* <Link to="/register">
        <button className="nav-btn" type="button">
          REGISTER
        </button>
      </Link> */}
      <div>{/* <Timer expiryTimestamp={time} /> */}</div>
    </nav>
  );
};

export default Navbar;
