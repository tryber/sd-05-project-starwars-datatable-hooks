import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SWContext from './SWContext';

const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [columns] = useState([
    'Column',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filterByName, setFilterByName] = useState('');
  const [columnFilter, setColumnFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState('');
  const [numericFilter, setNumericFilter] = useState([]);

  const addNewFilter = (column, comparison, value) => {
    setNumericFilter([...numericFilter, { column, comparison, value }]);
  };

  const context = {
    data,
    setData,
    fetching,
    setFetching,
    columns,
    filterByName,
    setFilterByName,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    numericFilter,
    addNewFilter,
  };

  return <SWContext.Provider value={context}>{children}</SWContext.Provider>;
};

SWProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default SWProvider;
