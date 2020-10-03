import React from 'react';
import Table from './components/table';
import SearchBar from './components/searchBar';
import NumericFilters from './components/numericFilters';
import Bonus from './components/bonus';
import Provider from './context/provider';

function App() {
  return (
    <div>
      <Provider>
        <SearchBar />
        <Bonus />
        <NumericFilters />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
