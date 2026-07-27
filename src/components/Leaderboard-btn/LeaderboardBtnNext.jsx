import React from "react";

const LeaderBoardBtnNext = ({handleNext}) => {
    return <div className="leaderboard-btn">
        <button onClick={() => handleNext()}>Next</button>
    </div>
}
export default LeaderBoardBtnNext;