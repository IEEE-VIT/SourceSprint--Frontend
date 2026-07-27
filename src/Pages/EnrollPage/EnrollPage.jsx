import React from "react";

import NavbarEnroll from "../../components/Navbar/Navbar-enroll";
import Enroll from "../../components/Enroll/Enroll";

// for new users - passing isExistingUser = false

const EnrollPage = () => {
  localStorage.setItem("loggedIn", false);
  return (
    <div className="enroll-container">
      <div className="navbar">
        <NavbarEnroll />
      </div>
      <div className="enroll-text-container">
        <Enroll idFound={true} isExistingUser={false} />
      </div>
    </div>
  );
};
export default EnrollPage;
