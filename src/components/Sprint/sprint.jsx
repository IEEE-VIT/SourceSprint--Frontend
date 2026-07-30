import React from 'react';
import './sprint.css'; 

function Sprint() {
  return (
    <div id="sprint" className="sprint-section">
      <div className="sprint-container">
        <div className="sprint-card">
          <h2 className="sprint-title">SourceSprint - Competition</h2>
          <p className="sprint-text">
            After a thrilling speaker session, get ready to merge PRs and solve issues!
            Choose issues from projects of various domains.
            Each time your PR gets merged, you earn points and climb the leaderboard!
          </p>
          <button className="sprint-btn">JOIN CODESPRINT</button>
        </div>
      </div>
    </div>
  );
}

export default Sprint;
