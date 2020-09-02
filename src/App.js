import React from 'react';
import './App.css';
import StarWarsProvider from './context/Provider';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';

function App() {
  return (
    <StarWarsProvider>
      <NameFilter />
      <NumericFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
