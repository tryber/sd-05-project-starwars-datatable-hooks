import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [textFilter, setTextFilter] = useState('');
  const [filterByNumericValues, setFiltros] = useState([]);
  const [options] = useState([
    'selecione',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const context = {
    data,
    setData,
    error,
    setError,
    textFilter,
    setTextFilter,
    filterByNumericValues,
    setFiltros,
    options,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Provider;
