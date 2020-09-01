import React from 'react';
import './App.css';

import Provider from './components/Provider';

import Table from './components/Table';

function App() {
  return (
    <Provider>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
