import React from 'react';
import useSelect from '../hooks/useSelect';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({setNoticias}) => {

  const CATEGORIAS = [
    { 
      nombre: 'General',
      valor: 'general'
    },
    { 
      nombre: 'Deportes',
      valor: 'sports'
    },
    { 
      nombre: 'Entretenimiento',
      valor: 'entertainment'
    },
    { 
      nombre: 'Salud',
      valor: 'health'
    },
    { 
      nombre: 'Ciencia',
      valor: 'science'
    },
    { 
      nombre: 'Tecnología',
      valor: 'technology'
    }
    ];

  const [select, SelecCategoria] = useSelect('', CATEGORIAS);
  

  const consultarNoticias = e => {
    e.preventDefault();
        
        //Consultar la api
    const fetchData = async () => {
      const url = 'https://newsapi.org/v2/top-headlines?category='+ select +'&apiKey=e6e833c883514d819af77eff89aa6715'
      
      const res = await axios.get(url);

      let noticiasFinal = [];
      
      res.data.articles.map(noticia => {
        noticia.source.id=uuidv4();
        noticiasFinal.push(noticia);
      })
     
      setNoticias(noticiasFinal);
      
    }
    
    fetchData();
    
       
  }

  return ( 
    <form onSubmit={consultarNoticias}>
      <SelecCategoria />
      <button type="submit" className="btn btn-primary btn-lg btn-block w-50 mt-3 mx-auto">Buscar Noticias</button>
    </form>
   );
}
 
export default Formulario;