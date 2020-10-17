import React, { useState } from 'react';
import propTypes from 'prop-types';
import SWContext from './swContext';

function SWProvider(props) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({ column: 'Name', sort: 'ASC' });

  const contexto = {
    data,
    setData,
    order,
    setOrder,
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

SWProvider.propTypes = {
  children: propTypes.node.isRequired,
};
