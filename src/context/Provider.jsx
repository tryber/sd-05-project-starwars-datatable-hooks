import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState({ name: '' });
  const [results, setResults] = useState([]);
  const [type, setType] = useState([]);

  const state = {
    data,
    setData,
    loading,
    setLoading,
    searchTerm,
    setSearchTerm,
    results,
    setResults,
    type,
    setType,
  };

  return (
    <StarWarsContext.Provider value={state}>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
