import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './context';

const StarWarsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const estadao = {
    loading,
    data,
    name,
    filterByNumericValues,
    setLoading,
    setData,
    setName,
    setFilterByNumericValues,
  };

  return (
    <StarWarsContext.Provider value={estadao}>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
