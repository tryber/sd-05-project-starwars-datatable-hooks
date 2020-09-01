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
      (error) => console.log(error.message)
    );
}
// came from former fetchPlanetsThunk

function Table() {
  const { dataApi, setDataApi } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets().then((data) => setDataApi(data));
  }, []);
  // replacing componentDidMount fetching planet endpoint
  
  return (
    <div>
      {dataApi.length === 0 && <h5>Loading...</h5>}
      {dataApi.length !== 0 && console.log(dataApi)}
      {dataApi.length !== 0 && (
        <h1>
          Hello
          {/* <table>
            <TableHeader />
            <TableData />
          </table> */}
        </h1>
      )}
    </div>
  );
}
// instead of creating boolean fetching, check if dataApi was filled

export default Table;
