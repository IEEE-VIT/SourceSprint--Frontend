import React, { useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Enroll from "../../components/Enroll/Enroll";
import { storeSessionToken } from "../../utils/session";

// for new users - passing isExistingUser = false

const EnrollPage = () => {
  useEffect(() => {
    // The backend appends the session JWT as ?token=<jwt> on this redirect.
    storeSessionToken();
    localStorage.setItem("loggedIn", "true");
  }, []);

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
