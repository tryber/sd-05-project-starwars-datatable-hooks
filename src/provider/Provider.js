import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import fetchStarWarsAPI from '../services/starWarsAPI';
import StarWarsContext from '../context/StarWarsContext';

export default function MyProvider(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [name, filterByName] = useState('');
  const [filtersValues, setFiltersValues] = useState({});
  const [filtersByNum, setFiltersByNum] = useState([]);

  const refreshLoading = () => {
    setLoading(() => !loading);
  }

  const savePlanets = (results) => {
    setData(results);
  }

  const handleText = (inputText) => {
    console.log(inputText);
    filterByName(inputText);
  }

  const handleValues = (e) => {
    setFiltersValues({...filtersValues, ...e})
  }
  
  const handleFiltersNum = (values) => {
    setFiltersByNum([...filtersByNum, values]);
    setFiltersValues({});
  }

  const resetFilters = (filters) => {
    setFiltersByNum([...filters])
  }

  const state = {
    loading,
    refreshLoading,
    data,
    savePlanets,
    name,
    handleText,
    filtersValues,
    handleValues,
    filtersByNum,
    handleFiltersNum,
    resetFilters,
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
