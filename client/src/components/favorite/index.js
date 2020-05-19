import React from "react";

function Book({ title, image, description, link, author, icon, action }) {
  return (
    <div className="card mb-2 overflow-hidden">
      <div className="card-header bg-secondary text-light"> 
        <i className={icon+" float-right m-2"} onClick={action}></i>
        <a className="text-light" href={link}>
          <i className="fas fa-external-link-alt float-right m-2"></i>
        </a>
        <h2 className="">
          {title}
        </h2>
        <h4>{author}</h4>
      </div>
      <div>
        <img src={image} className="float-left mr-4" height="200" width="130" alt={title} />
        <div className="p-4">
          {description}
        </div>
      </div>
    </div>
  )
}

export default Book
