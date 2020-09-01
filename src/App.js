import React from 'react';
import './App.css';
import Table from './components/Table';
import { Provider } from './context/StarWarsContext';
// import BananaContext from './components/testeContext';

function App() {
  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <Table />
        </header>
        {/* <BananaContext /> */}
      </div>
    </Provider>
  );
}

export default App;

