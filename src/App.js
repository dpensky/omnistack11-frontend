// import React, {useState} from 'react';
import React from 'react';
// import Header from './Header';
// import Logon from './pages/Logon/'

import Routes from './routes';

import './global.css'

function App() {
  /*
  const [counter, setCounter] = useState(0)  // retorna array [valor, funcao]
  function increment() {
    setCounter(counter+1)
    console.log(counter)
  }
  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
    
  );
  */
 return (
   <Routes />
 )
}

export default App;
