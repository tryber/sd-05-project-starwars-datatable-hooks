import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'Name',
    sort: 'ASC',
  });

  const context = {
    data,
    setData,
    isFetching,
    setIsFetching,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
