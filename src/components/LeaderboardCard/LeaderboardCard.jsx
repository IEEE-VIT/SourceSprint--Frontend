import React, { useState } from "react";
import "./leaderboardCard.css";

const LeaderboardCard = (props) => {
  const isTopThree = props.rank <= 3;
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelected = () => setIsSelected((prev) => !prev);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSelected();
    }
  };

  return (
    <div
      className={`leaderboardcard-container${isTopThree ? ` top-rank rank-${props.rank}` : ""}${isSelected ? " selected" : ""}`}
      role="button"
      tabIndex={0}
      onClick={toggleSelected}
      onKeyDown={handleKeyDown}
      aria-pressed={isSelected}
    >
      <div className="leaderboardcard-rank">{props.rank}</div>
      <div className="leaderboard-contestant">
        <div className="contestant-icon">
          <img src={props.img} alt="" className="contest"/>{" "}
        </div>
        <div className="contestent-name">{props.user}</div>
      </div>
      <div className="leaderboard-score">{props.score}</div>
    </div>
  );
};
export default LeaderboardCard;
