import React from 'react';
import './App.css';
import Table from './components/Table';
import MyProvider from './provider/Provider';

export default function App() {
  return (
    <MyProvider>
      <div className="App">
        <Table />
      </div>
    </MyProvider>
  );
}
