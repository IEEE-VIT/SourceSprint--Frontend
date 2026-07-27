import React from "react";
import EnvelopeLogo from "../../assets/svg/register-svg/enroll-letter.svg";

import "./enroll.css";

// for new users - isExistingUser = false
// for existing users - isExistingUser = true

const Enroll = (props) => {
  const message1 = "You are successfully enrolled";
  const message2 = "Oh, I see you have already enrolled";
  const message3 = "Sorry, your registration is not found. If you think this is wrong, please contact the organizers.";

  return (
    <div>
      <div className="postregister-container">
        <div className="postregister-middle">
          <div className="message">
            <h2>{props.idFound ? (props.isExistingUser ? message2 : message1): message3}</h2>
            <h1>Good Luck Sprinting!</h1>
            {/* Add website link to leaderboard here  */}
            <a href={props.idFound? "../#leaderboard" : "../"}>
              <button className="enroll-btn">{props.idFound? "Leaderboard" : "Home"}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
