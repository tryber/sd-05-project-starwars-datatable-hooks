import React, { createContext, useState } from 'react';


export const StarWarsContext = createContext();

const StarProvider = ({ children }) => {
  const [isfetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [name, setFilterByName] = useState('');
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  const context = {
    isfetching, 
    setIsFetching,
    error, 
    setError, 
    data, 
    setData, 
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
      // filterByNumericValues: [
      //   {
      //     column,
      //     comparison,
      //     value,
      //   }
      // ],
    },
    setFilterByName,
    setfilterByNumericValues, 
  };

  return (
    <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>
  )
} 
 
export default StarProvider;
