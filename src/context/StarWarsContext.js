import React, { useState ,createContext } from 'react';

export const StarWarsContext = createContext();

export const StarWarsProvider = ({ children }) => {
  
  const [data, setData] = useState([]);
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

  const context = {
    data,
    setData,
    isFetching,
    setIsFetching,
    name: filters.filterByName.name,
    setFilters,
    filterByNumericValues,
    SetFilterByNumericValues,
    order,
    setOrder,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  )
}
