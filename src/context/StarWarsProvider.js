import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [filterByNumbers, setFilterByNumbers] = useState([]);

  const context = {
    isFetching,
    setIsFetching,
    data,
    setData,
    name,
    setName,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filterByNumbers,
    setFilterByNumbers,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
