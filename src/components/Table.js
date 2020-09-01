import React, { useContext, useEffect } from 'react';
import TableHeader from './TableHeader';
import TableData from './TableData';
import StarWarsContext from '../context/StarWarsContext';

const apiPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';
function fetchPlanets() {
  return fetch(apiPlanets)
    .then((response) => response.json())
    .then(
      (data) => data.results,
      (error) => console.log(error.message),
    );
}
// taken from former fetchPlanetsThunk

function Table() {
  const { dataApi, setDataApi } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets().then((data) => setDataApi(data));
  }, []);
  // to replace componentDidMount fetching planet endpoint

  return (
    <div>
      {dataApi.length === 0 && <h5>Loading...</h5>}
      {/* {dataApi.length !== 0 && console.log(dataApi)} */}
      {dataApi.length !== 0 && (
        <table>
          <TableHeader />
          <TableData />
        </table>
      )}
    </div>
  );
}
// instead of boolean isFetching, checked if dataApi was filled

export default Table;
