import React, { createContext, useState } from 'react';
import Proptypes from 'prop-types';

export const StarWarsContext = createContext();

const StarProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [nameFilter, setFilterByName] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filterByValues, setfilterByNumericValues] = useState([]);

  const context = {
    data,
    setData,
    nameFilter: nameFilter.filterByName,
    filterByValues,
      // filterByNumericValues: [
      //   {
      //     column,
      //     comparison,
      //     value,
      //   }
      // ],
    setFilterByName,
    setfilterByNumericValues,
  };

  return (
    <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>
  );
};

export default StarProvider;

StarProvider.propTypes = {
  children: Proptypes.arrayOf(Proptypes.element).isRequired,
};
