import React from 'react';
import './App.css';
import StarWarsProvider from './context/Provider';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import ActiveFilters from './components/ActiveFilters';

function App() {
  return (
    <StarWarsProvider>
      <NameFilter />
      <NumericFilter />
      <ActiveFilters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
