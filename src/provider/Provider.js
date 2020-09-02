import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

export default function MyProvider(props) {
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const refreshLoading = () => {
    setLoading((loading) => !loading);
  }

  const savePlanets = (results) => {
    setData(results);
  }
  
  const state = {
    loading,
    data,
    refreshLoading,
    savePlanets,
  }

  return (
    <StarWarsContext.Provider value={state}>
      {props.children}
    </StarWarsContext.Provider>
  );
}

