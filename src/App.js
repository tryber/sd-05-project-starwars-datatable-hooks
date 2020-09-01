import React, { useContext } from 'react';
import './App.css';
import { StarWarsProvider } from './context/StarWarsContext';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <StarWarsProvider>
        <Filter />
        <Table />
      </StarWarsProvider>
    </div>
  );
}

export default App;
