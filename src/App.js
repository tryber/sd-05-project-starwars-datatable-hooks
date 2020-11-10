import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';

// The Provider component is what makes the state available to all child components,
// no matter how deeply nested they are within the component hierarchy. 
// The Provider component receives a value prop. 
// This is where we’ll pass our current value:
function App() {
  return (
    <Provider>
      <div>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
