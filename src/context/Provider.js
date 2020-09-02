import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsAPI from '../services/planetsAPI';

function Provider({ children }) {
  const apiData = () => planetsAPI();
  const [planets, setPlanets] = useState([]);
  const [textForm, setTextForm] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setCO] = useState('');
  const [value, setValue] = useState('');
  const [numberFilter, setNumberFilter] = useState([]);

  useEffect(() => {
    apiData().then((data) => setPlanets(data.results));
  }, []);

  const filters = {
    filterByName: {
      name: textForm,
    },
    filterByNumericValues: numberFilter,
  };

  const context = {
    planets,
    setTextForm,
    filters,
    setColumn,
    setCO,
    setValue,
    setNumberFilter,
    numberFilter,
    column,
    comparison,
    value,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
