import React from "react";
import { Link } from "react-router-dom";
import Store from "../../utils/Store";

function logOut() {
  Store.set("userData", {});
  window.location = "/";
}

function authenticatedNavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-light py-1">

      <div class="col-4 pt-1">
        <img class="mb-4" src="img/logo_abinco.png" alt="Abinco" width="40" height="40" />
      </div>

      <div class="col-4 text-center d-none d-sm-block">
        <h2>LEAD SCORING</h2>
      </div>

      <div class="col-4 d-flex justify-content-end align-items-center">

        <Link class="btn btn-sm btn-outline-secondary" to="/">
          Home
          </Link>

        <Link class="btn btn-sm btn-outline-secondary" to="/newexample">
          Database
          </Link>

        <Link class="btn btn-sm btn-outline-secondary" to="/newquestion">
          Create Question
          </Link>

        <button class="btn btn-sm btn-outline-secondary" onClick={logOut}>
          Log out
          </button>
      </div>

    </nav>
  );
}

function unauthenticatedNavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-light py-1">

      <div class="col-4 pt-1">
        <img class="mb-4" src="img/logo_abinco.png" alt="Abinco" width="40" height="40" />
      </div>

      <div class="col-4 text-center d-none d-sm-block">
        <h2>LEAD SCORING</h2>
      </div>

      <div class="col-4 d-flex justify-content-end align-items-center">

        <Link class="btn btn-sm btn-outline-secondary" to="/login">
          Login
          </Link>

        <Link class="btn btn-sm btn-outline-secondary" to="/register">
          Register
          </Link>
      </div>

    </nav>
  );
}

function Nav() {
  const { token } = Store.get("userData");
  return token
    ? authenticatedNavBar()
    : unauthenticatedNavBar();
}

export default Nav;
