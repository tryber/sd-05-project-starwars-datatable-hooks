import React, { useState } from 'react';
import SWContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [selectedOption, setSelectedOption] = useState([
    'population',
    'diameter',
    'surface_water',
    'orbital_period',
    'rotation_period',
  ]);
  const [order, setOrder] = useState({ column: 'Name', sort: 'ASC' });
  const orderFunction = (orderState, orderValue) => {
    setOrder((initialState) => ({ ...initialState, [orderState]: orderValue }));
  };
  const numericFunction = (numericValue) => {
    setFilterByNumericValues((initialState) => ([...initialState, numericValue]));
  };
  const removeFilter = (nomeDoFiltro) => {
    setFilterByNumericValues((initialState) =>
      initialState.filter((filtro) => filtro.column !== nomeDoFiltro),
    );
  };
  const context = {
    data,
    setData,
    isFetching,
    setIsFetching,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    numericFunction,
    selectedOption,
    setSelectedOption,
    order,
    setOrder,
    orderFunction,
    removeFilter,
  };
  return <SWContext.Provider value={context}>{children}</SWContext.Provider>;
};

export default Provider;
