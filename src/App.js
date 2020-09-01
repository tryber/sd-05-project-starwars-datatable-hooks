import React from 'react';
import { PlanetsProvider } from './Components/planetsContext';
import Table from './Components/Table';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <PlanetsProvider>
      <SearchBar />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
