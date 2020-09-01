import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/table';
import Inputs from './components/inputs';

function App() {
  return (
    <div>
      <Provider>
        <header>
          <Inputs />
        </header>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
