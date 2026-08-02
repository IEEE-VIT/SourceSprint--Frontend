import React from "react";
import "./LeaderboardPage.css";

const SpaceBackground = () => {
  return (
    <div className="leaderboard-space-bg" aria-hidden="true">
      <div className="leaderboard-nebula leaderboard-nebula-1" />
      <div className="leaderboard-nebula leaderboard-nebula-2" />
      <div className="leaderboard-planet" />
      <div className="leaderboard-stars" />
    </div>
  );
};

export default SpaceBackground;
