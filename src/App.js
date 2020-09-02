import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import Provider from './context/Provider';
import TextForm from './components/TextForm';
import SelectForm from './components/SelectForm';
import OrderInput from './components/OrderInput';
import Filters from './components/Filters';

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <TextForm />
        <SelectForm />
        <OrderInput />
        <Filters />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
