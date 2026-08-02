import React from "react";
import "./enroll.css";

const Enroll = (props) => {
  const message1 = "Successfully Enrolled!";
  const message2 = "Already Registered!";
  const message3 = "Registration Not Found";

  let statusIcon = null;
  let subtitle = "GOOD LUCK SPRINTING!";

  if (!props.idFound) {
    subtitle = "Please register first.";
    statusIcon = (
      <div className="status-icon-wrapper error">
        <svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="status-svg">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
    );
  } else if (props.isExistingUser) {
    statusIcon = (
      <div className="status-icon-wrapper info">
        <svg viewBox="0 0 24 24" fill="none" stroke="#E8A045" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="status-svg">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </div>
    );
  } else {
    statusIcon = (
      <div className="status-icon-wrapper success">
        <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="status-svg">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
    );
  }

  return (
    <div className="postregister-wrapper">
      <div className="postregister-card">
        {statusIcon}
        <h2 className="postregister-title">
          {props.idFound ? (props.isExistingUser ? message2 : message1) : message3}
        </h2>
        <h1 className="postregister-subtitle">{subtitle}</h1>
        <a href="/">
          <button className="enroll-btn-sharp">
            RETURN HOME
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px" }}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Enroll;
