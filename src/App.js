import React from 'react';
import Table from './components/Table';
import './App.css';
import SWProvider from './components/Provider';

function App() {
  return (
    <div className="App">
      <SWProvider>
        <Table />
      </SWProvider>
    </div>
  );
}

export default App;
