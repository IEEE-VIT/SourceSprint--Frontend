import React from "react";
import "./searchbox.css";

export const SearchBox = ({placeholder, handleChange}) => (
  <div className="leaderboard-searchfield-container">
    <input
      className="leaderboard-searchfield"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);
