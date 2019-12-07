import React, { Fragment } from 'react';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasConntext';


function App() {
  return (
    <CategoriasProvider>
      <Header/>
      <h1>Hola</h1>

    </CategoriasProvider>
  );
}

export default App;
