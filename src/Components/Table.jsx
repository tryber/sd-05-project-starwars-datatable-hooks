import React, { useContext } from 'react';
import { PlanetContext } from './planetsContext';
import Loading from './Loading';

const columns = [
  'Name',
  'rotation period',
  'orbital period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface water',
  'population',
  'residents',
  'films',
  'created',
  'edited',
];

function mapArray(array) {
  return array.map((arr) => (
    <tr key={arr.name}>
      <td>{arr.name}</td>
      <td>{arr.rotation_period}</td>
      <td>{arr.orbital_period}</td>
      <td>{arr.diameter}</td>
      <td>{arr.climate}</td>
      <td>{arr.gravity}</td>
      <td>{arr.terrain}</td>
      <td>{arr.surface_water}</td>
      <td>{arr.population}</td>
      <td>{arr.residents}</td>
      <td>{arr.films}</td>
      <td>{arr.created}</td>
      <td>{arr.edited}</td>
    </tr>
  ));
}

function Table() {
  const { data, isFetching, fetchingDone, fetchPlanets } = useContext(
    PlanetContext,
  );
  fetchPlanets();
  fetchingDone();
  if (isFetching) return <Loading />;
  return (
    <table>
      <thead>
        <tr>
          {columns.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>{mapArray(data.results)}</tbody>
    </table>
  );
}

export default Table;
