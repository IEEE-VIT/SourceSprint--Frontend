import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Enroll from "../../components/Enroll/Enroll";

// for existing users - isExistingUser = true

const EnrollPage = () => {
  localStorage.setItem("loggedIn", true);
  return (
   
    <div className="App">
      <div className="navbar-wrapper">
        <Navbar/>
      </div>
      <div className="content" style={{ paddingTop: "120px" }}>
        <Enroll idFound={true} isExistingUser={true} />
      </div>
    </div>
  );
};
export default EnrollPage;
