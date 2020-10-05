import React from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import FiltroNumerico from './components/FiltroNumerico';
import AscDesc from './components/AscDesc';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <header className="App-header">
        <Filter />
        <br />
        <FiltroNumerico />
        <br />
        <br />
        <AscDesc />
        <br />
        <Table />
      </header>
    </Provider>
  );
}

export default App;
