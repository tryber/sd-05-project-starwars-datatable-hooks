import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

export const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cabecalho, setCabecalho] = useState([]);
  const [isFetching, setIsFetching] = useState('false');
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filterByNumericValues, SetFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({
    column: 'Name',
    sort: 'ASC',
  });
  const [sort, setSort] = useState({
    sort: '',
  });
  const [column, setColumn] = useState({
    column: '',
  });

  const context = {
    data,
    setData,
    cabecalho,
    setCabecalho,
    isFetching,
    setIsFetching,
    name: filters.filterByName.name,
    setFilters,
    filterByNumericValues,
    SetFilterByNumericValues,
    sort,
    setSort,
    column,
    setColumn,
    order,
    setOrder,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
