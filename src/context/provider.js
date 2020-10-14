import React, { useState } from 'react';
import SWContext from './swContext';

function SWProvider(props) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const contexto = {
    data,
    setData,
    isFetching,
    setIsFetching,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return <SWContext.Provider value={contexto}>{props.children}</SWContext.Provider>;
}

export default SWProvider;
