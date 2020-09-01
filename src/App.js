import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import Provider from './context/Provider';
import TextForm from './components/TextForm';
import SelectForm from './components/SelectForm';

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <TextForm />
        <SelectForm />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
