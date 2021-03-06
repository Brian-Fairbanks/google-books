import React, { useState, useEffect } from "react";
import Book from "../components/favorite";
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

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }


  return (
    <div className="container text-center">
      <h3>Favorites</h3>
      {books.length > 0?
        books.map(book => {
          return (<Book
            key = {book._id}
            title={book.title}
            image={book.image}
            link={book.link}
            description={book.description}
            author={book.authors}
            icon = {"fas fa-trash"}
            action = {()=>{deleteBook(book._id)}}
          />)
        })
        :
        <div className="text-danger h4"> You have no books saved in your favorites! </div>
      }
    </div>
  );
}

export default Favorites;
