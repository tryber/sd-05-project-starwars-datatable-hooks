import React from 'react';
import './App.css';
import MainPage from './Pages/MainPage';
import SWContext from '../context/SWContext';
function App() {
  return (
    <SWContext.Provider >
      <div className="App">
        <MainPage />
      </div>
    </SWContext.Provider>
  );
}

export default App;
