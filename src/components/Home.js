import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { Filter, Compare, Table } from './';

export default function Home() {
  const {
  isFetching,
  fetchGetPlanet } = useContext(StarWarsContext);

  useEffect(() => {
    fetchGetPlanet(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    isFetching
    ? <p>Loading...</p>
    :
    <div>
      {/* <Header /> */}
      <Filter />
      <Compare />
      <Table />
    </div>

  );
}
