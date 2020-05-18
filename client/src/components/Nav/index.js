import React from "react";
import Jumbotron from "../Jumbotron"

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h3 className="h3 text-light mr-5">Google-Books</h3>
        <a className="navbar-brand" href="/">
          Search
        </a>
        <a className="navbar-brand" href="/">
          Favorites
        </a>
      </nav>

      <Jumbotron>
            <h1 className="h1">(React) Google Books Search</h1>
            <h2 className="h3">Search for and Save Books of Interest</h2>
          </Jumbotron>
    </div>
  );
}

export default Nav;
