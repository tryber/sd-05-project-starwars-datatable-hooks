import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();
export const Provider = ({ children }) => {
  const [fetching, setFetching] = useState(false);
  const [planetsData, setPlanetsData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({ column: 'Name', sort: 'ASC' });
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const context = {
    fetching,
    setFetching,
    planetsData,
    setPlanetsData,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    order,
    setOrder,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
