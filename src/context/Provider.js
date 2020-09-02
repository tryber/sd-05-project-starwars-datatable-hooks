import React, { useEffect, useState } from 'react';
import MyContext from './context';
import fetchSWAPI from '../services/api';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterName, setFilterName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    fetchSWAPI()
      .then(
        (planets) => {
          setData(planets);
          setLoading(false);
        },
      );
  }, []);

  const state = {
    loading,
    data,
    filterName,
    setFilterName,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <MyContext.Provider value={state}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
