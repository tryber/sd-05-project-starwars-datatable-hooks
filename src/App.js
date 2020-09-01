import React from 'react';
import Table from './components/Table';
import SWProvider from  './context/Provider';
import './App.css';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';

function App() {
  return (
    <div className="App">
      <SWProvider>
        <SearchBar />
        <Filters />
        <Table />
      </SWProvider>
    </div>
  );
}

export default App;
