import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import fetchAPI from '../services/fetchAPI';

const StarWarsContext = createContext();

const Provider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  function fetchPlanetsSuccess(response) {
    const { results } = response;
    setIsFetching(false);
    setData(results);
  }

  function fetchPlanetsFail(error1) {
    setIsFetching(false);
    setError(error1.message);
  }

  function fetchPlanets() {
    if (isFetching) return;
    setIsFetching(true);
    fetchAPI()
    .then(fetchPlanetsSuccess, fetchPlanetsFail);
  }

  function changeFilterByName(nameInput) {
    setFilters({
      filterByName: {
        name: nameInput,
      },
      filterByNumericValues: [{
        column: '',
        comparison: '',
        value: '',
      }],
    });
  }

  function changeFilterByNumeric(coluna, comparacao, valor) {
    setFilters((prevState) => ({
      filterByName: { 
        name: undefined,
      },
      filterByNumericValues: [...prevState.filterByNumericValues, {
        column: coluna,
        comparison: comparacao,
        value: valor,
      }],
    }));
  }

  const context = {
    filters,
    error,
    data,
    isFetching,
    fetchPlanets,
    changeFilterByName,
    changeFilterByNumeric,
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
