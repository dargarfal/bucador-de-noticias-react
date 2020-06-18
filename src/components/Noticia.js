import React from "react";

const Noticia = ({ noticia }) => {
  return (
    
      <div className="card" >
        <img src={noticia.urlToImage} className="card-img-top" alt={noticia.title} />
        <div className="card-body">
          <h5 className="card-title">{noticia.title}</h5>
          <p className="card-text">
          {noticia.description}
          </p>
          <a href={noticia.url} className="btn btn-primary">
            Ir a la noticia
          </a>
        </div>
      </div>
    
  );
};

export default Noticia;
