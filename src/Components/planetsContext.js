import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import requestPlanets from '../Services/planetsAPI';

const PlanetContext = createContext();

const PlanetsProvider = ({ children }) => {
  const [data, setPlanets] = useState('');
  const [isFetching, setFetching] = useState(true);

  const fetchingDone = () => {
    if (data !== '') setFetching(false);
  };

  const fetchPlanets = () => {
    requestPlanets().then((response) => setPlanets(response));
  };

  const pContext = {
    data,
    isFetching,
    fetchingDone,
    fetchPlanets,
  };

  return (
    <PlanetContext.Provider value={pContext}>{children}</PlanetContext.Provider>
  );
};

export { PlanetContext, PlanetsProvider };

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
