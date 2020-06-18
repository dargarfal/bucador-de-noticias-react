import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => {
  
  const [state, actualizarState] = useState(stateInicial);
  
  const Seleccionar = () => (

    
    <select 
      className="form-control w-50 m-auto" 
      onChange={e => actualizarState(e.target.value)}
      
      value={state}
      >
      {opciones.map(opcion => (
        <option value={opcion.valor} key={opcion.nombre}>{opcion.nombre}</option>
      ))}  
      
    </select>
    
  )

  return [state, Seleccionar, actualizarState];
}
 
export default useSelect;