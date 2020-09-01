import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import fetchAPI from '../services/fetchAPI';

const StarWarsContext = createContext();

const Provider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  /* const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  }); */

  function fetchPlanetsSuccess(response) {
    const { results } = response;
    setIsFetching(false);
    setData(results);
    //    console.log(results);
  }

  function fetchPlanetsFail(error1) {
    setIsFetching(false);
    setError(error1.message);
  }

  function fetchPlanets() {
    if (isFetching) return;
    setIsFetching(true);
    /* fetchAPI().then(
      (data) => setData(data.results),
      (error) => setError(error.message),
    ); */
    fetchAPI()
    .then(fetchPlanetsSuccess, fetchPlanetsFail);
  }

  const context = {
    error,
    data,
    isFetching,
    fetchPlanets,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export { StarWarsContext, Provider };
