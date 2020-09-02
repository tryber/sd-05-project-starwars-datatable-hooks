import React from 'react';
import './App.css';
import Table from './components/Table.js';
import Search from './components/Search';
import FilterNumeric from './components/FilterNumeric';
import StarWarsProvider from './context/StarWarsProvider';
import FilterStatus from './components/FilterStatus';
import Order from './components/Order';

function App() {
  return (
    <StarWarsProvider>
      <Search />
      <FilterNumeric />
      <FilterStatus />
      <Order />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
