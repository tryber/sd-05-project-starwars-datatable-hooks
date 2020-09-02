import React from 'react';
import StarWarsContextProvider from './context/StarWarsContextProvider';

function App() {
  return (
    <StarWarsContextProvider>
      <h1>StarWars Context + Hooks</h1>
    </StarWarsContextProvider>
  )
}

export default App;
