import React, { useState } from 'react';
import { createContext } from 'react';

export const StarWarsContext = createContext();

export const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [ filterByNumericValues, setFilterByNumericValues ] = useState([]);

  const store = {
    data,
    setData,
    name: filters.filterByName.name,
    setFilters,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <StarWarsContext.Provider value={store}>
      {children}
    </StarWarsContext.Provider>
  );
};
