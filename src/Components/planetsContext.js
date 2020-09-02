import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import requestPlanets from '../Services/planetsAPI';

const PlanetContext = createContext();

const PlanetsProvider = ({ children }) => {
  const [data, setPlanets] = useState('');
  const [isFetching, setFetching] = useState(true);
  const [filters, setFilterByName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [filterByNumericValues, setFilterNumeric] = useState([]);

  const fetchingDone = () => {
    if (data !== '') {
      setFetching(false);
    }
  };

  const fetchPlanets = () => {
    requestPlanets().then((response) => setPlanets(response));
  };

  const filterByName = (e) => setFilterByName(e.target.value);

  const filterByNumeric = () => setFilterNumeric([...filterByNumericValues,
    { column, comparison, value }]);

  const pContext = {
    column,
    comparison,
    value,
    filterByNumericValues,
    filters,
    data,
    isFetching,
    fetchingDone,
    fetchPlanets,
    filterByName,
    filterByNumeric,
    setColumn,
    setComparison,
    setValue,
  };

  return (
    <PlanetContext.Provider value={pContext}>{children}</PlanetContext.Provider>
  );
};

export { PlanetContext, PlanetsProvider };

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
