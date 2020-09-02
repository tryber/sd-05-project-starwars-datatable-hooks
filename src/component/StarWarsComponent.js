import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function MyComponent() {
  return (
    <StarWarsContext.Provider value={123}>
      <MyOtherComponent />
    </StarWarsContext.Provider>
  );
}

export default MyComponent;
