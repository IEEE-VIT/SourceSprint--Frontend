import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import RepoList from "../../components/Repos/RepoList";
import Footer from "../../components/Footer/Footer";
import SpaceBackground from "../LeaderboardPage/SpaceBackground";
import "../LeaderboardPage/LeaderboardPage.css";

const ReposPage = () => {
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
        <RepoList />
        <Footer />
      </div>
    </div>
  );
};

export default ReposPage;
