import React, { useState } from "react";
import axios from "axios";
import LeaderboardCard from "../LeaderboardCard/LeaderboardCard";
import { SearchBox } from "../SearchBox/SearchBox";
import "./leaderboard.css";
import TEST_DATA from "../../assets/instructions/test_data";
// import Leaderboard from 'react-leaderboard';
import LeaderBoardBtn from "../Leaderboard-btn/LeaderboardBtn";
// import LeaderBoardBtnPrev from "../Leaderboard-btn/LeaderboardBtnPrev";
// import LeaderBoardBtnNext from "../Leaderboard-btn/LeaderboardBtnNext";

const LeaderBoard_link = `${process.env.REACT_APP_BACKEND_URL}/leaderboard`;

class LeaderBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      // cards: TEST_DATA,
      cards: [],
      searchField: "",
      currentpage: 1,
      start:1,
      end:5,
      totalpages:0
    };
  }
  componentWillMount() {
    axios.get(LeaderBoard_link, {}).then((response) => {
      this.setState({
        cards: response.data,
      });
    });
    //remove below for API implementation
    // this.setState({
    //   cards: TEST_DATA,
    // });
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value, currentpage:1 });
  };
  handleClick = (value) => {
    // console.log("btn cliked", value);
    this.setState({
        currentpage: value
    })
  };
  handlePrev = () => {
    if(this.state.start>1){
      this.setState({
        start:this.state.start-1
      })
    }
    // console.log("prev start reduced", this.state.start, this.state.end)
  }
  handleNext = (e) => {
    e.preventDefault()
    // if(this.state.end>=this.state.totalpages){
    //   this.setState({
    //     start:this.state.start+1
    //   })
    // }
    // console.log("next end added", this.state.start, this.state.end)
  }

  render() {
    // const { cards, searchField } = this.state;
    const cards = this.state.cards.map((card, index) => {
      return {
        rank: index,
        card
      }
    });
    const searchField = this.state.searchField;
    const filteredCards = cards.filter((card) =>{
          if(searchField!=null){
            return card.card.user.toLowerCase().includes(searchField.toLowerCase())
          }
          else{
            return card;
          }
      });

    const length = filteredCards.length;
    const pages = Math.ceil(length / 10);
    const btn_array = [...Array(pages).keys()];
    const BtnList = btn_array.map((number) => {
      return (
        <LeaderBoardBtn handleClick={this.handleClick} value={number + 1} />
      );
    });
    const maxCards = filteredCards.slice((this.state.currentpage-1)*10,(this.state.currentpage)*10 );
   
    const LeaderBoardCards = maxCards.map(({rank, card}, index) => (
      <LeaderboardCard
        key={rank}
        rank={rank+1}
        user={card.user}
        score={card.score}
        img={card.img}
      />
    ));


    return (
      <div className="leaderboard-container" id="leaderboard">
        <div className="leaderboard-heading">
          <h1>LEADERBOARD</h1>{" "}
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
        {/* <div className="string">
        <Leaderboard users={filteredCards} paginate={this.state.paginate}/>
      </div> */}
      <div className="leaderboard-btn-list">
      {/* <LeaderBoardBtnPrev handlePrev={this.handlePrev} /> */}
      {BtnList}
      {/* <LeaderBoardBtnNext handlePrev={this.handleNext} /> */}
      </div>
      
      </div>
    );
  }
}

export default LeaderBoard;

// const LeaderBoard = () => {
//   let data = [];
//   const [list, setList] = useState([]);
//   axios.get(`${LeaderBoard_link}`, {}).then(function (response) {
//     data = response.data;
//     console.log("state", data);
//     setList(data);
//   });
//   const LeaderBoard = {

//   }

// //   const LeaderboardCards =  (data) => {
// //     //  data.map((card) => {
// //     //     console.log("ldkfj");
// //     // })
// //     console.log("leader")
// //     return data.filter((card) => {

// //       <LeaderboardCard participant={card} score={card} />;
// //     });
// //   };
// //   console.log("leaderboard", LeaderboardCards());

//   return (
//     <div className="leaderboard-container">
//       <div className="leaderboard-heading"></div>
//       <div className="leaderboard-search"></div>
//       <div className="leaderboard-set-container">
//         <div className="leaderboard-set-heading">
//           <div className="leaderboard-set-heading-row1">RANK</div>
//           <div className="leaderboard-set-heading-row2">CONTESTANT</div>
//           <div className="leaderboard-set-heading-row3">SCORE</div>
//         </div>
//         <div className="leaderboard-set-component">{LeaderboardCards}</div>
//       </div>
//     </div>
//   );
// };
// export default LeaderBoard;
