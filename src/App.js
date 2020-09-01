import React from 'react';
import { PlanetsProvider } from './Components/planetsContext';
import Table from './Components/Table';

function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
