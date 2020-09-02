import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [textFilter, setTextFilter] = useState('');
  const [filterByNumericValues, setFiltros] = useState({});

  const context = {
    data,
    setData,
    error,
    setError,
    textFilter,
    setTextFilter,
    filterByNumericValues,
    setFiltros,
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
