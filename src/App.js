import React from 'react';
import './App.css';
import { Provider } from './context';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div className="App">
      <Provider>
        <MainPage />
      </Provider>
    </div>
  );
}

export default App;
