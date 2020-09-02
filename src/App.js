import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import './App.css';
import Table from './components/Table';
import StarWarsContext from './context/StarWarsContext';
import fetchStarWarsAPI from './services/starWarsAPI';

export default function App() {
  const { refreshLoading, savePlanets, data } = useContext(StarWarsContext);

  useEffect(() => {
    fetchStarWarsAPI().then((data) => {
      savePlanets(data.results);
      refreshLoading();
    });
    console.log(data);
  }, []);

  return (
    <div className="App">
      <Table />
    </div>
  );
}

App.propTypes = {
  refreshLoading: propTypes.func.isRequired,
  savePlanets: propTypes.func.isRequired,
};
