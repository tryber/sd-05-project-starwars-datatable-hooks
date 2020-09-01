import React, { useState } from 'react';
import StarWarsContext from './context';

const StarWarsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  const estadao = {
    loading,
    data,
    name,
    setLoading,
    setData,
    setName,
  }

  return(
    <StarWarsContext.Provider
      value={estadao}
    >
      {children}
    </StarWarsContext.Provider>
  )
};

export default StarWarsProvider;
