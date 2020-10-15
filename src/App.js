import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import FiltroNumerico from './components/FiltroNumerico';
import Filter from './components/Filter';
// import AscDesc from './components/AscDesc';

function App() {
  return (
    <Provider>
      <header className="App-header">
        <Filter />
        <br />
        <FiltroNumerico />
        {/* <br />
        <br />
        <AscDesc />
        <br /> */}
        <Table />
      </header>
    </Provider>
  );
}

export default App;
