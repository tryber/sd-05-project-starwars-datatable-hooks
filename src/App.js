import React from 'react';
import Provider from './context/Provider';
// import FilterName from './components/FilterName';
// import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import './App.css';
// import FilterDisplay from './components/FilterDisplay';

function App() {
  return (
    <Provider>
      {/* <FilterName /> */}
      {/* <NumericFilter /> */}
      {/* <FilterDisplay /> */}
      <Table />
    </Provider>
  );
}

export default App;
