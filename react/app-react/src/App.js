import logo from './logo.svg';
import './App.css';
import React from 'react';
import Contador from './components/contador/Contador';
import Cronometro from './components/cronometro/Cronometro';

function App() {
  //JS
  let titulo = 'React!!!';

  //HTML
  //Todos los componentes con vista tienen que tener un RETURN
  //Esto es la vista del componente

  //JSX --> HTML dentro de JS 
  return (
    <React.Fragment> 
      {/* o <> o <Fragment> */}
      <h1 className="texto_principal">Hola Mundo {titulo}</h1>
      <Contador></Contador>
      <Cronometro></Cronometro>
    
    {/* o </> 0 </Fragment> */}
    </React.Fragment>  
  );
}

export default App;
