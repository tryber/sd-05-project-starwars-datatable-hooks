import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import getPlanets from '../services/data';

const SwProvider = ({ children }) => {
  const swData = () => getPlanets();
  const [planetas, setPlanetas] = useState([]);
  const [searchText, setText] = useState('');
  const [filterNumber, setFilter] = useState([]);
  const [column, setCol] = useState('');
  const [comparison, setComp] = useState('');
  const [value, setNumb] = useState(0);

  const filters = {
    filterByName: {
      name: searchText,
    },
    filterByNumericValues: filterNumber,
  };
  const context = {
    filters,
    swData,
    setPlanetas,
    planetas,
    filterNumber,
    searchText,
    setText,
    setFilter,
    column,
    comparison,
    value,
    setCol,
    setComp,
    setNumb,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};
SwProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SwProvider;
