import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Favorite from "../components/favorite";
import API from "../utils/API";

function Favorites() {
  const [books, setBooks] = useState([])

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
      {console.log(books)}
      <h3>Book Search</h3>
      {books.map(book => {
        return (<Favorite
          title={book.title}
          image={book.image}
          link={book.link}
          description={book.description}
          author={book.authors}
        />)
      })}
    </div>
  );
}

export default Favorites;
