import React, { useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import getPlanets from '../services/starAPI';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const context = {
    data,
    setData,
    error,
    setError,
  }

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;
