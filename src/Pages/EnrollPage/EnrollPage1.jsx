import React from "react";

import NavbarEnroll from "../../components/Navbar/Navbar-enroll";
import Enroll from "../../components/Enroll/Enroll";

// for existing users - isExistingUser = true

const EnrollPage = () => {
  localStorage.setItem("loggedIn", true);
  return (
   
    <div className="enroll-container">
      <div className="navbar">
        <NavbarEnroll/>
      </div>
      <div className="enroll-text-container">
        <Enroll idFound={true} isExistingUser={true} />
      </div>
    </div>
  );
};
export default EnrollPage;
