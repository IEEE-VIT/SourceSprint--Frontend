import React from 'react';
import './coffee.css'; 

function Coffee() {
  return (
    <div className="coffee-section">
      <div className="coffee-container">
        <div className="coffee-card">
          <h2 className="coffee-title">Get to know Open Source</h2>
          <p className="coffee-text">
            Not sure what Open Source is? Don't worry! We got you covered!
            Gather a deep understanding of why Open Source contribution is important
            and how you can get your PRs merged.
          </p>
        </div>

        <div className="coffee-card">
          <h2 className="coffee-title">Git. Set. Go.</h2>
          <p className="coffee-text">
            Did Git and GitHub always feel like a dreaded topic?
            With this hands-on interactive Git & GitHub workshop, you'll learn every aspect of it.
            Within a couple of hours you can start your journey to become an open source contributor!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coffee;
