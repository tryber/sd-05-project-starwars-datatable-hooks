import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

export default function Provider(props) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC' });

  const state = {
    isFetching,
    data,
    filterByName,
    filterByNumericValues,
    order,
    setIsFetching,
    setData,
    setFilterByName,
    setFilterByNumericValues,
    setOrder,
  };

  return (
    <StarWarsContext.Provider value={state}>
      {props.children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
