import React, {Fragment, useState} from 'react';

//Components
import Header from './components/Header';
import Formulario from './components/Formulario';
import Noticias from './components/Noticias';


function App() {

  const [noticias, setNoticias] = useState([]);

  return (
    <Fragment>
      <Header />

      <div className="container">
        <div className="m-5 text-uppercase text-center">
          <h2 className="font-weight-bold">Encuentra noticias por categorías</h2>
        </div>
        
        <div >
          <Formulario 
            setNoticias={setNoticias}
          />
        </div>
      </div>
      <div>
        <Noticias 
          noticias={noticias}
        / >
      </div>
      
      
    </Fragment>
  );
}

export default App;
