import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import requestPlanets from '../Services/planetsAPI';

const PlanetContext = createContext();

const PlanetsProvider = ({ children }) => {
  const [data, setPlanets] = useState('');
  const [isFetching, setFetching] = useState(true);
  const [filters, setFilterByName] = useState('');

  const fetchingDone = () => {
    if (data !== '') setFetching(false);
  };

  const fetchPlanets = () => {
    requestPlanets().then((response) => setPlanets(response));
  };

  const filterByName = (e) => {
    setFilterByName(e.target.value);
  }

  const pContext = {
    filters,
    data,
    isFetching,
    fetchingDone,
    fetchPlanets,
    filterByName,
  };

  return (
    <PlanetContext.Provider value={pContext}>{children}</PlanetContext.Provider>
  );
};

export { PlanetContext, PlanetsProvider };

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
