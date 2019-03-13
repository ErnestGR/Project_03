import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand">Abinco</h1>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Database
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/newexample">
            Lead Scoring
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
