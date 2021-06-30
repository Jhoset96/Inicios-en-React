import React from 'react';
import Contador from './contador.js';
import Saludo from './saludo.jsx';
import SaludoFuncional from './SaludoFuncional.jsx';
import Card from './card.js'
import Componente from './components/Componente'

function App() {

  let auth = false;
  var lista = ["playa","loteria","sucursal"];
  return (
    <div>
     
        <header>
        <div>
        <h1>Hola Mundo</h1>
     <Contador />
     <saludo nombre="Soy Jhoset" lang= "es"/>
     <Saludo />
     </div>
     <SaludoFuncional />
     <Card />
     <p className="casilla">
    <ul id="casillista">
    <label className="casilla" htmlFor="nombre">Nombre</label>
    <input type="text" id="nombre"></input>
    <p>
       {auth ? "El usuario esta logueado":"El usuario no esta logueado"}
     </p>
     <ul id="lista">
      {lista.map(el=> (
      <li>{el}</li>))}
    </ul>
    </ul>
    </p>
        </header>
        <div>
         <Componente msg="mi primer componente definido de props más facil  " />
        </div>
    </div>
    
  );
}

export default App;
