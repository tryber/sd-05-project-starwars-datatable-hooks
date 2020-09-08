import React, {useState, useEffect } from 'react';

import getPlanets from '../services/api.js'
const Table = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getPlanets().then(data => setData(data.results));
    setLoading(false);
  },[]);
  return (
    !loading ? data.map(
      (e) =>  {
        return <table><tbody><tr><td>{e.name}</td></tr></tbody></table>}) : <div>loading...</div>
   );
}

export default Table;
