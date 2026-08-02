import React, { useState, useEffect } from "react";
import axios from "axios";
import LeaderboardCard from "../LeaderboardCard/LeaderboardCard";
import { SearchBox } from "../SearchBox/SearchBox";
import "./leaderboard.css";
import PLACEHOLDER_LEADERBOARD from "./placeholderData";

const LeaderBoard_link = `${process.env.REACT_APP_BACKEND_URL}/leaderboard`;

const LeaderBoard = () => {
  const [cards, setCards] = useState(PLACEHOLDER_LEADERBOARD);
  const [searchField, setSearchField] = useState("");
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const fetchLeaderboard = () => {
    axios
      .get(LeaderBoard_link)
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          const sortedData = [...response.data].sort((a, b) => b.score - a.score);
          setCards(sortedData);
          setLastUpdated(new Date());
        }
      })
      .catch((error) => {
        console.warn("Failed to fetch live leaderboard, using local data", error);
      });
  };

  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const rankedCards = cards.map((card, index) => ({
    rank: index + 1,
    card: {
      ...card,
      img: card.img || `https://ui-avatars.com/api/?name=${encodeURIComponent(card.user)}&background=0d1117&color=E8A045&bold=true`
    },
  }));

  const filteredCards = rankedCards.filter(({ card }) =>
    card.user.toLowerCase().includes(searchField.toLowerCase())
  );

  const showPodium = !searchField && cards.length >= 3;
  const podiumCards = showPodium ? rankedCards.slice(0, 3) : [];
  const listCards = showPodium ? rankedCards.slice(3) : filteredCards;

  const displayPodium = showPodium
    ? [podiumCards[1], podiumCards[0], podiumCards[2]]
    : [];

  return (
    <div className="leaderboard-container" id="leaderboard">
      <div className="leaderboard-header-section">
        <div className="leaderboard-live-badge-wrapper">
          <span className="leaderboard-live-badge">
            <span className="live-dot"></span>
            LIVE
          </span>
          <span className="leaderboard-last-updated">
            Refreshed at {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
        </div>
        <h1 className="leaderboard-title">LEADERBOARD</h1>
      </div>

      <div className="leaderboard-controls">
        <div className="leaderboard-search">
          <SearchBox
            placeholder="Search participants..."
            handleChange={handleChange}
          />
        </div>
        <div className="leaderboard-stats">
          <span className="stats-label">Total Participants:</span>
          <span className="stats-value">{cards.length}</span>
        </div>
      </div>

      {showPodium && (
        <div className="leaderboard-podium-wrapper">
          <div className="leaderboard-podium">
            {displayPodium.map(({ rank, card }) => {
              const rankClass = rank === 1 ? "first" : rank === 2 ? "second" : "third";
              const medalEmoji = rank === 1 ? "👑" : rank === 2 ? "🥈" : "🥉";
              return (
                <div key={rank} className={`podium-card podium-${rankClass}`}>
                  <div className="podium-rank-display">
                    <span className="medal">{medalEmoji}</span>
                    <span className="rank-num">#{rank}</span>
                  </div>
                  <div className="podium-avatar-container">
                    <img src={card.img} alt={card.user} className="podium-avatar" />
                    <div className={`podium-avatar-ring ring-${rankClass}`}></div>
                  </div>
                  <div className="podium-info">
                    <div className="podium-name">{card.user}</div>
                    <div className="podium-score">
                      <span className="score-val">{card.score}</span>
                      <span className="score-lbl"> pts</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="leaderboard-list-wrapper">
        <div className="leaderboard-list-header">
          <div className="header-col rank">RANK</div>
          <div className="header-col name">NAME</div>
          <div className="header-col score">SCORE</div>
        </div>

        <div className="leaderboard-list-body">
          {listCards.length > 0 ? (
            listCards.map(({ rank, card }) => (
              <LeaderboardCard
                key={rank}
                rank={rank}
                user={card.user}
                score={card.score}
                img={card.img}
              />
            ))
          ) : (
            <div className="leaderboard-no-results">
              No participants found matching "{searchField}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
