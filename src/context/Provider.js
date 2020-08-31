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
  const [filterByName, setFilterByName] = useState({ name: '' });
  const searchText = (text) => {
    setFilterByName({ name: text });
  };
  
  const context = { data, setData, fetching, setFetching, columns, filterByName, searchText };
  return <SWContext.Provider value={context}>{children}</SWContext.Provider>;
};

SWProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default SWProvider;
