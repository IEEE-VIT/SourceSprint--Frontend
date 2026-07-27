import React from "react";
import "./leaderboardCard.css";

const LeaderboardCard = (props) => {
  return (
    <div className="leaderboardcard-container">
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
