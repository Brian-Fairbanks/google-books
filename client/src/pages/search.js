import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Book from "../components/favorite"

function Search() {
  const [books, setBooks] = useState({items:[]})
  const [formObject, setFormObject] = useState({
    title:"",
    authors:[],
    description:"",
    link:"",
    image:""
  })
  const [search, setSearch] = useState("")

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

  function handleAdd(index){
    const book = books.items[index];
    setFormObject({
      title:book.volumeInfo.title,
      image:book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/128x195",
      link:book.volumeInfo.infoLink,
      description:book.volumeInfo.description,
      author:book.volumeInfo.authors
    })
  };

  useEffect(() => {
    if(formObject.title){
      API.saveBook(formObject)
    }
  }, [formObject]);



  return (
    <div className="container text-center">
      <h3>Book Search</h3>
      <form className="input-group d-flex flex justify-content-center mb-5">
        <input className="input-group-text" placeholder="Search" onChange={(event) => handleSearch(event.currentTarget.value)}></input>
      </form>
      <hr/>
      <h3>Results</h3>
      {books.items.map( (book, index) => {
        return (
          <Book 
            title={book.volumeInfo.title}
            image={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/128x195"}
            link={book.volumeInfo.infoLink}
            description={book.volumeInfo.description}
            author={book.volumeInfo.authors}
            icon = {"fas fa-heart"}
            action = {()=>{handleAdd(index)}}
          />
        )}
      )}
    </div>
  );
}

export default Search;
