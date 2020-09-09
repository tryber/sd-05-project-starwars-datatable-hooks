import React, { useContext, useEffect } from 'react';
// import propTypes from 'prop-types';
import Table from './Table';
import Procurar from './Procurar';
import { Context } from '../Context/contextSW';


function small(data) {
  const planets = data.results.map((e) => {
    delete e.residents;
    const t = { ...e };
    return t;
  });
  return Object.entries(planets[0]).map((e) => e[0]);
}

function getAPI(setData, setIsLoading, setHeader) {
  setIsLoading(true);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets';
  return fetch(`${url}`).then((resp) =>
    resp
      .json()
      .then((e) => {
        setData(e);
        setIsLoading(false);
        return e;
      }).then((e) => setHeader(small(e)))
      .catch((e) => setIsLoading(e)),
  );
}

export default function Aux() {
  const { setData, isLoading, setIsLoading, setHeader, filterByNumericValues } = useContext(
    Context,
  );
  useEffect(() => {
    getAPI(setData, setIsLoading, setHeader);
  }, []);
  if (!isLoading) {
    return (
      <div>
        <header>
          <Procurar usedFilters={filterByNumericValues} />
        </header>
        <Table />
      </div>
    );
  }
  return <h1>Loading</h1>;
}
