import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [textFilter, setTextFilter] = useState('');

  const context = {
    data,
    setData,
    error,
    setError,
    textFilter,
    setTextFilter,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Provider;
