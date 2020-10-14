import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
/* import Filter from './components/Filter';
import FiltroNumerico from './components/FiltroNumerico';
import AscDesc from './components/AscDesc'; */

function App() {
  return (
    <Provider>
      <header className="App-header">
        {/* <Filter />
        <br />
        <FiltroNumerico />
        <br />
        <br />
        <AscDesc />
        <br /> */}
        <Table />
      </header>
    </Provider>
  );
}

export default App;
