import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import AboutMe from "./components/pages/Home";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/Projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
