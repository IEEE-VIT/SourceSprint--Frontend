import React from "react";
import "./enroll.css";

const Enroll = (props) => {
  const message1 = "You are successfully enrolled!";
  const message2 = "You have already enrolled in SourceSprint!";
  const message3 = "Registration not found. Please contact the event organizers.";

  return (
    <div className="postregister-wrapper">
      <div className="postregister-card">
        <span className="postregister-badge">✦ SOURCESPRINT 2026 ✦</span>
        <h2 className="postregister-title">
          {props.idFound ? (props.isExistingUser ? message2 : message1) : message3}
        </h2>
        <h1 className="postregister-subtitle">GOOD LUCK SPRINTING!</h1>
        <p className="postregister-text">
          Get ready to master Git commands, master GitHub pull requests, and contribute to open-source projects.
        </p>
        <a href="/">
          <button className="enroll-btn-sharp">RETURN HOME →</button>
        </a>
      </div>
    </div>
  );
};

export default Enroll;
