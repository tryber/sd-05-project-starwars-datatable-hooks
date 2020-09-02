import React from 'react';
import './App.css';
import Table from './components/Table';
import TextFilter from './components/TextFilter';
import NumberFilter from './components/NumberFilter';
// import DeleteFilter from './components/DeleteFilter';
import StarWarsProvider from './context/Provider';

function App() {
  return (
    <div className="App">
      <StarWarsProvider>
        <div>
          <TextFilter />
          <NumberFilter />
          {/* <DeleteFilter /> */}
          <Table />
        </div>
      </StarWarsProvider>
    </div>
  );
}

export default App;
