import React from 'react';
import Provider from './service/Provider';
// import FilterName from './components/FilterName';
// import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import './App.css';
// import FilterDisplay from './components/FilterDisplay';
// import FilterOrder from './components/FilterOrder';

function App() {
  return (
    <Provider>
      {/* <FilterName /> */}
      {/* <NumericFilter /> */}
      {/* <FilterDisplay /> */}
      {/* <FilterOrder /> */}
      <Table />
    </Provider>
  );
}

export default App;