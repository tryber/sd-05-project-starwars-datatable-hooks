import React from 'react';
import Table from './components/Table';
import SWProvider from './context/Provider';
import './App.css';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import ActiveFilters from './components/ActiveFilters';
import SortFilter from './components/SortFilter';

function App() {
  return (
    <div className="App">
      <SWProvider>
        <SearchBar />
        <Filters />
        <SortFilter />
        <ActiveFilters />
        <Table />
      </SWProvider>
    </div>
  );
}

export default App;
