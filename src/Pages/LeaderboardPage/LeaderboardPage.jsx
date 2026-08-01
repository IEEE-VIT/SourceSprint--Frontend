import React from "react";
import "./LeaderboardPage.css";

// import SpaceBackground from "./SpaceBackground";

const leaders = [
    { rank: 1, name: "Aarav Sharma", points: 2450 },
    { rank: 2, name: "Riya Kapoor", points: 2310 },
    { rank: 3, name: "Manav Patel", points: 2180 },
    { rank: 4, name: "Sneha Iyer", points: 2050 },
    { rank: 5, name: "Devansh Rao", points: 1980 },
    { rank: 6, name: "Priya Nair", points: 1850 },
    { rank: 7, name: "Kabir Mehta", points: 1760 },
    { rank: 8, name: "Ananya Verma", points: 1690 },
    { rank: 9, name: "Yash Gupta", points: 1540 },
    { rank: 10, name: "Ishita Rao", points: 1480 },
];

function LeaderboardPage() {
    return (
        <div className="leaderboard-page">
            {/* <SpaceBackground /> */}

            <div className="planet"></div>



            <div className="nebula nebula-1"></div>
            <div className="nebula nebula-2"></div>
            <div className="constellation-group">
                <span className="c-star star-1"></span>
                <span className="c-star star-2"></span>
                <span className="c-star star-3"></span>
                <span className="c-star star-4"></span>

                <div className="c-line line-1"></div>
                <div className="c-line line-2"></div>
                <div className="c-line line-3"></div>
            </div>

            <h1 className="leaderboard-title">LEADERBOARD</h1>

            <div className="leaderboard-list">
                {leaders.map((user) => (
                    <div className={`leader-card rank-${user.rank}`} key={user.rank}>
                        <div className="leader-left">
                            <div className="leader-rank">#{user.rank}</div>

                            <div className="leader-name">
                                {user.name}
                            </div>
                        </div>

                        <div className="leader-points">
                            ⚡ {user.points} XP
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeaderboardPage;