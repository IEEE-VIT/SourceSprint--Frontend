import React from "react";
import "./searchbox.css";
import SearchIcon from "../../assets/svg/leaderboard-svg/leaderboard-search.svg"

export const SearchBox = ({placeholder, handleChange}) => (
    <div className="leaderboard-searchfield-container">
  <input
    className="leaderboard-searchfield"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
  {/* <div className="leaderboard-search-icon">
      <img src={SearchIcon} alt="" />
  </div> */}
    </div>

  
);
