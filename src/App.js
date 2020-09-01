import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './pages/Table';

function App() {
  return (
    <section>
      <Provider>
        <table>
          <Table />
        </table>
      </Provider>
    </section>
  );
}

export default App;
