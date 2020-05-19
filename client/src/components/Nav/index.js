import React from "react";
import {Link} from "react-router-dom"
import Jumbotron from "../Jumbotron"

function Nav(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h3 className="h3 text-light mr-5">Google-Books</h3>
        <Link to="/search" className="navbar-brand">
          Search
        </Link>
        <Link to="/favorites" className="navbar-brand">
          Favorites
        </Link>
      </nav>

      <Jumbotron>
            <h1 className="h1">(React) Google Books Search</h1>
            <h2 className="h3">Search for and Save Books of Interest</h2>
          </Jumbotron>
    </div>
  );
}

export default Nav;
