import React from 'react';
import './sprint.css'; 
import sprintright from "../../assets/svg/sprint-svg/sprint-right.svg"
import sprintleft from "../../assets/svg/sprint-svg/sprint-left.svg"
function Sprint() {
  return (
    <div>
      {/* Sprint component with image on the right */}
      <div className="sprint-container">
        <div className="sprint-text-content">
          <h2>SourceSprint Competition</h2>
          <p>After a thrilling speaker session, get ready to merge PRs and solve issues!
Choose issues from projects of various domains.
Each time your PR gets merged, you get points</p>
          <button>JOIN CODESPRINT</button>
        </div>
        <div className="sprint-image sprint-right">
          <img src={sprintright} alt="Sprint" />
        </div>
      </div>

      {/* Component with text on left and image on right */}
      <div className="sprint-container2">
        <div className="sprint-image sprint-left">
        <img src={sprintleft} alt="Sprint" />
        </div>
        <div className="sprint-text-content2 text-right">
          <div>SPRINT</div>
          <div className='text-below'>Contribute. Solve. Win.</div>
          <button className='register-button'>R E G I S T E R</button>
        </div>
      </div>

      
      
    </div>
  );
}

export default Sprint;
