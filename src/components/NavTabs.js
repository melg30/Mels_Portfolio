import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // Using some code from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          About Me
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/discover"
          className={
            location.pathname === "/discover" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
