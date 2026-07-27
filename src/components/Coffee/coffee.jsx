import React from 'react';
import './coffee.css'; 
import coffeeleft from "../../assets/svg/coffee-svg/coffee-left.svg"; 
import coffeeright from "../../assets/svg/coffee-svg/coffee-right.svg"; 
function Coffee() {
  return (
    <div>
      {/* Coffee component with image on the right */}
      <div className="coffee-container">
        <div className="coffee-text-content">
          <h2>Get to know Open Source</h2>
          <p>Not sure what Open Source is? 
Don't worry! We got you covered! Gather a deep understanding of why Open Source contribution is important and how you can get your PRs mereged.</p>
        </div>
        <div className="coffee-image coffee-right">
          <img src={coffeeleft} alt="Coffee" />
        </div>
      </div>

      {/* Another component with image on the left */}
      <div className="coffee-container">
        <div className="coffee-image coffee-left">
          <img src={coffeeright} alt="Another Image" />
        </div>
        <div className="coffee-text-content text-right">
          <h2>Git. Set. Go.</h2>
          <p>DId Git and GitHub always felt like a dreaded topic?
With this hands-on interactive Git & GitHub workshop, you'll learn every aspect of it. 
Within a couple of hours you can start your journey to become an open source contributor!</p>
        </div>
      </div>
    </div>
  );
}

export default Coffee;
