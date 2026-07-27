import React from "react";
import "./leaderboard-btn.css"

const LeaderBoardBtn = ({handleClick, value}) => {
    return (
        <button  className="leaderboard-btn" onClick={() => handleClick(value)}>{value}</button>
    )
      

}
export default LeaderBoardBtn;