import React from 'react';
import './App.css';
import Provider from './components/Provider';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Filtros from './components/Filtros';

function App() {
  return (
    <Provider>
      <div className="App">
        <Filtros />
        <SearchBar />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
