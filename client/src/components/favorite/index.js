import React from "react";

function Favorite({ title, image, description, link, author }) {
  return (
    <div className="card">
      <div className="card-header bg-secondary text-light"> 
        <h2 className=""> {title}</h2>
        <h4>{author}</h4>
      </div>
      <div>
        <img src={image} className="float-left mr-4" alt={title} />
        <div className="p-4">
          {description}
        </div>
      </div>
      <div className="card-footer">
        <a href={link}>{link}</a>
      </div>
    </div>
  )
}

export default Favorite
