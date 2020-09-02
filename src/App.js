import React from 'react';
import StarWarsContextProvider from './context/StarWarsContextProvider';

import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <StarWarsContextProvider>
      <Filters />
      <Table />
    </StarWarsContextProvider>
  );
}

export default App;
