import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./Pages/HomePage/HomePage";
import EnrollPage from "./Pages/EnrollPage/EnrollPage";
import EnrollPage1 from "./Pages/EnrollPage/EnrollPage1";
import EnrollPage2 from "./Pages/EnrollPage/EnrollPage2";
import GalaxyBackground from "./components/Home/GalaxyBackground";
import RegistrationPage from "./Pages/RegistrationPage/registration";
import ResourcesPage from "./Pages/ResourcesPage/ResourcesPage";
import LeaderboardPage from "./Pages/LeaderboardPage/LeaderboardPage";

const App = () => {
  return (
    <div className="App">
      <GalaxyBackground />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/resources" component={ResourcesPage} />
        <Route exact path="/leaderboard" component={LeaderboardPage} />
        <Route exact path="/enrolled/successful" component={EnrollPage} />
        <Route exact path="/enrolled/existing" component={EnrollPage1} />
        <Route exact path="/enrolled/idnotfound" component={EnrollPage2} />
      </Switch>
    </div>
  );
};
export default App;
