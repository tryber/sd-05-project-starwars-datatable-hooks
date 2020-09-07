import React from 'react';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
// import FilterByNumber from './components/FilterByNumber';
// import OrderPlanets from './components/OrderPlanets';
import StarWarsProvider from './provider/StarWarsProvider';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <div>
          <h1> StarWars Database Filters </h1>
          <FilterByName />
          {/* <FilterByNumber />
          <OrderPlanets /> */}
          <Table />
        </div>
      </StarWarsProvider>
    </div>
  );
}

export default App;
