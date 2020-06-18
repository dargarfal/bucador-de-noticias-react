import React from 'react';
import Noticia from './Noticia';

const Noticias = ({noticias}) => {
  
  
  
  //console.log(noticias);

  /*noticias.map(noticia => {
    console.log(noticia.author);
    
  })*/
  
  //console.log((noticias.length));
  
  
 //console.log(vernoticias);
  
  return ( 
    <div className="card-columns m-3">
      {
        noticias.map(noticia => (
          <Noticia 
            key={noticia.source.id}
            noticia={noticia}
          />
        ))}
    </div>
  );
}
 
export default Noticias;