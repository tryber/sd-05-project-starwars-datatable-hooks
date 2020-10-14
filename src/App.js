import React from 'react';
import './index.css';
import Table from './components/Table';
import SWProvider from './context/provider';

function App() {
  return (
    <SWProvider>
    <Table />
    </SWProvider>
  );
}

export default App;
