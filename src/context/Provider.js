import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/apiService';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [textForm, setTextForm] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setCO] = useState('');
  const [value, setValue] = useState('');
  const [numberFilter, setNumberFilter] = useState([]);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC' });
  const apiData = () => fetchPlanets();
  useEffect(() => {
    apiData().then((data) => setPlanets(data.results));
  }, []);
  const filters = {
    filterByName: {
      name: textForm,
    },
    filterByNumericValues: numberFilter,
    order,
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
    order,
    setOrder,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
