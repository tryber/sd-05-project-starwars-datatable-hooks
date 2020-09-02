import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import fetchStarWarsAPI from '../services/starWarsAPI';
import StarWarsContext from '../context/StarWarsContext';

export default function MyProvider(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const refreshLoading = () => {
    setLoading(() => !loading);
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

  useEffect(() => {
    fetchStarWarsAPI().then((data) => {
      savePlanets(data.results);
      refreshLoading();
    });
    console.log(data);
  }, []);

  return (
    <StarWarsContext.Provider value={state}>
      {props.children}
    </StarWarsContext.Provider>
  );
}

MyProvider.propTypes = {
  children: propTypes.node.isRequired,
}
