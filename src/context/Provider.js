import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import propTypes from 'prop-types';

const StarWarsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const mainState = {
    loading,
    data,
    setLoading,
    setData,
  };

  return <StarWarsContext.Provider value={mainState}>{children}</StarWarsContext.Provider>;
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: propTypes.string.isRequired,
};
