import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState({ name: '' });
  const [results, setResults] = useState({ results: [] });
  const [type, setType] = useState({ vetor: [] });

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
