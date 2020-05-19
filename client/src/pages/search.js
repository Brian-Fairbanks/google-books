import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

function Search() {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res => {
        setBooks(res.data)
      })
      .catch(err => console.log(err));
  };


  return (
    <div className="container text-center">
      <h3>Book Search</h3>
      <form className="input-group d-flex flex justify-content-center mb-5">
        <input className="input-group-text"></input>
        <div className="input-group-append">
          <button className="btn btn-primary"><i className="fas fa-search"></i></button>
        </div>
      </form>
      <hr/>
      <h3>Results</h3>
      {console.log(books)}
    </div>
  );
}

export default Search;
