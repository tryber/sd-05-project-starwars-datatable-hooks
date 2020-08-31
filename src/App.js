import React from 'react';
import Table from './components/Table';
import SWProvider from  './context/Provider';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SWProvider>
        <SearchBar />
        <Table />
      </SWProvider>
    </div>
  );
}

export default App;
