import React, { useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const context = {
    data,
    setData,
    error,
    setError,
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
