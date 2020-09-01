import React, { useEffect, useState } from 'react';
import MyContext from './context';
import fetchSWAPI from '../services/api';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSWAPI()
      .then(
        (data) => {
          setData(data)
          setLoading(false)
        }
      )
  }, [])
  return (
    loading ? <p>Loading</p> :
      <MyContext.Provider value={{ planets: data }}>
        {children}
      </MyContext.Provider>
  )
}

export default Provider;
