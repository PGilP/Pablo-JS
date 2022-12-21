import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom'

import Contador from './components/contador/Contador';
import Cronometro from './components/cronometro/Cronometro';
import Alumnos from './components/alumnos/Alumnos';
import GridImagenes from './components/gridImagenes/GridImagenes';

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
      {/* <Contador></Contador>
      <Cronometro></Cronometro> */}
      {/* <Alumnos clase="JS"></Alumnos> */}
      
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contador">Contador</Link>
          <Link to="/alumnos">Alumnos</Link>
          <Link to="/cronometro">Cronometro</Link>
          <Link to="/gridImagenes">Grid Imagenes</Link>
        </nav>
        <Routes>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='alumnos' element={<Alumnos clase="JS"></Alumnos>}> </Route>
          <Route path='gridImagenes' element={<GridImagenes></GridImagenes>}> </Route>
          <Route path='cronometro' element={<Cronometro></Cronometro>}> </Route>
          <Route path='contador' element={<Contador></Contador>}> </Route>
        </Routes>
      </BrowserRouter>
    
    {/* o </> 0 </Fragment> */}
    </React.Fragment>  
  );
}

export default App;

function Home(){
  return <>
    <h1>Soy el home</h1>
  </>
}
