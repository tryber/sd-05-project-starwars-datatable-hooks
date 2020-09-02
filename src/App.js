import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import './App.css';
import Table from './components/Table';
import MyProvider from './provider/Provider';

export default function App() {
  return (
    <MyProvider>    
      <div className="App">
        <Table />
      </div>
    </MyProvider>
  );
}

App.propTypes = {
  refreshLoading: propTypes.func.isRequired,
  savePlanets: propTypes.func.isRequired,
};
