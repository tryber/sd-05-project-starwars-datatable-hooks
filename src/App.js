import React from 'react';
import './App.css';
import Table from './componentes/Table';
import StarWarsProvider from './context/provider';

function App() {
  return (
    <div className="App">
      <StarWarsProvider>
        <Table />
      </StarWarsProvider>
    </div>
  );
}

export default App;
