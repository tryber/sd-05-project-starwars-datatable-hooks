import React from 'react';
import './App.css';
import { StarWarsProvider } from './context/StarWarsContext';
import Table from './components/Table';

function App() {
  return (
    <StarWarsProvider>
      <div className="App">
        <div>StarWars Datatable with Filters</div>
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
