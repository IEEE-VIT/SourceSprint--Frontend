import React from "react";

const LeaderBoardBtnPrev = ({handlePrev}) => {
    return <div className="leaderboard-btn">
        <button onClick={() => handlePrev()}>Prev</button>
    </div>
}
export default LeaderBoardBtnPrev;