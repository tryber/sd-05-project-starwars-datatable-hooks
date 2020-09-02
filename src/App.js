import React from 'react';
import './App.css';
import Table from './pages/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <section>
        <Table />
      </section>
    </Provider>
  );
}

export default App;
