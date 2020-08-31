import React from 'react';
import Table from './components/Table';
import SWProvider from  './context/Provider';
import './App.css';

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
