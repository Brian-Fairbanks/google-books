import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Book from "../components/favorite"

function Search() {
  const [books, setBooks] = useState({items:[]})
  const [formObject, setFormObject] = useState({})
  const [search, setSearch] = useState("")

  // useEffect(() => {
  //   loadBooks()
  // }, [])

  // function loadBooks() {
  //   API.getBooks()
  //     .then(res => {
  //       setBooks(res.data)
  //     })
  //     .catch(err => console.log(err));
  // };

  function handleSearch(input){
    setSearch(input);
    searchBooks();
  }

  function searchBooks() {
    API.googleSearch(search)
      .then(res => {
        setBooks(res.data)
      })
      .catch(err => console.log(err));
  };



  return (
    <div className="container text-center">
      <h3>Book Search</h3>
      <form className="input-group d-flex flex justify-content-center mb-5">
        <input className="input-group-text" onChange={(event) => handleSearch(event.currentTarget.value)}></input>
        <div className="input-group-append">
          <button className="btn btn-primary"><i className="fas fa-search"></i></button>
        </div>
      </form>
      <hr/>
      <h3>Results</h3>
      {console.log(books)}
      {books.items.map(book => {
        return (
          <Book 
            title={book.volumeInfo.title}
            image={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/128x195"}
            link={book.volumeInfo.infoLink}
            description={book.volumeInfo.description}
            author={book.volumeInfo.authors}
            icon = {"fas fa-heart"}
            action = {()=>{}}
          />
        )}
      )}
    </div>
  );
}

export default Search;
