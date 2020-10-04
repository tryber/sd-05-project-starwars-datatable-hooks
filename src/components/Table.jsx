import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const { data, loading } = useContext(StarWarsContext);
  return (
    !loading ? data.map(
     (e) => <table><tbody><tr><td>{e.name}</td></tr></tbody></table>) : <div>loading...</div>
  );
};


export default Table;
