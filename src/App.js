import React from 'react';
import './App.css';
import Provider from './components/Provider';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Select from './components/Select';
import Filtros from './components/Filtros';

function App() {
  return (
    <Provider>
      <div className="App">
        <Filtros />
        <Select />
        <SearchBar />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
