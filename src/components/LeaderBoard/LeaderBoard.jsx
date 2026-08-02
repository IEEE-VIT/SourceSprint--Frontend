import React from "react";
import axios from "axios";
import LeaderboardCard from "../LeaderboardCard/LeaderboardCard";
import { SearchBox } from "../SearchBox/SearchBox";
import "./leaderboard.css";
import PLACEHOLDER_LEADERBOARD from "./placeholderData";

const LeaderBoard_link = `${process.env.REACT_APP_BACKEND_URL}/leaderboard`;

class LeaderBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: PLACEHOLDER_LEADERBOARD,
      searchField: "",
    };
  }
  componentWillMount() {
    axios.get(LeaderBoard_link, {}).then((response) => {
      if (Array.isArray(response.data) && response.data.length > 0) {
        this.setState({
          cards: response.data,
        });
      }
    }).catch(() => {
      // Keep placeholder data if the leaderboard API is unavailable
    });
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { cards, searchField } = this.state;
    const rankedCards = cards.map((card, index) => ({
      rank: index + 1,
      card,
    }));

    const filteredCards = rankedCards.filter(({ card }) =>
      card.user.toLowerCase().includes(searchField.toLowerCase())
    );

    const LeaderBoardCards = filteredCards.map(({ rank, card }) => (
      <LeaderboardCard
        key={rank}
        rank={rank}
        user={card.user}
        score={card.score}
        img={card.img}
      />
    ));

    return (
      <div className="leaderboard-container" id="leaderboard">
        <div className="leaderboard-box">
          <div className="leaderboard-heading">
            <h1>LEADERBOARD</h1>
            <hr className="leaderboard-hr" />
          </div>
          <div className="leaderboard-search">
            <SearchBox
              placeholder="Search participants"
              handleChange={this.handleChange}
            />
          </div>
          <div className="leaderboard-set-heading">
            <div className="leaderboard-set-heading-row1">RANK</div>
            <div className="leaderboard-set-heading-row1">Name</div>
            <div className="leaderboard-set-heading-row3">SCORE</div>
          </div>
          <div className="leaderboard-set-component">{LeaderBoardCards}</div>
        </div>
      </div>
    );
  }
}

export default LeaderBoard;
