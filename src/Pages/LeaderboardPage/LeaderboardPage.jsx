import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
import Footer from "../../components/Footer/Footer";
import SpaceBackground from "./SpaceBackground";
import "./LeaderboardPage.css";

const LeaderboardPage = () => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App leaderboard-page">
      <SpaceBackground />

      <button
        onClick={() => history.push("/")}
        className="leaderboard-back-btn"
      >
        ← Back to Home
      </button>

      <div className="navbar-wrapper">
        <Navbar />
      </div>

      <div className="content leaderboard-page-content">
        <LeaderBoard />
        <Footer />
      </div>
    </div>
  );
};

export default LeaderboardPage;
