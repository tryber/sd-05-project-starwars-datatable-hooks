import React from 'react';
import StarWarsContextProvider from './context/StarWarsContextProvider';

import Table from './components/Table';

function App() {
  return (
    <StarWarsContextProvider>
      <Table />
    </StarWarsContextProvider>
  );
}

export default App;
