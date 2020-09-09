import React from 'react';
import Aux from './Components/aux';
import './App.css';
import { Provider } from './Context/contextSW';

function App() {
  return (
    <Provider >
      <Aux />
    </Provider>
  );
}

export default (App);
