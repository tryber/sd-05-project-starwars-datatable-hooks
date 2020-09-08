import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import NumericFilters from './components/NumericFIlters';

function App() {
  return (
    <StarWarsProvider>
      <SearchBar />
      <NumericFilters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
