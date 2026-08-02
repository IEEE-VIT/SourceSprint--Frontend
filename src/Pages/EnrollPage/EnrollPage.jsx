import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Enroll from "../../components/Enroll/Enroll";

// for new users - passing isExistingUser = false

const EnrollPage = () => {
  localStorage.setItem("loggedIn", false);
  return (
    <div className="App">
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div className="content" style={{ paddingTop: "120px" }}>
        <Enroll idFound={true} isExistingUser={false} />
      </div>
    </div>
  );
};
export default EnrollPage;
