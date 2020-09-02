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
]

function filterNum(arr, filter) {
  if (filter === undefined) {
    return arr;
  }
  switch (filter.comparison) {
    case 'maior que':
      return arr.filter(
        (item) => Number(item[filter.column]) > Number(filter.value));
    case 'menor que':
      return arr.filter(
        (item) => Number(item[filter.column]) < Number(filter.value));
    case 'igual a':
      return arr.filter(
        (item) => Number(item[filter.column]) === Number(filter.value));
    default:
      return arr;
  }
}

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

function filterName(name, array) {
  return array.filter((arr) => arr.name.includes(name));
}

function Table() {
  const {
    data,
    isFetching,
    fetchingDone,
    fetchPlanets,
    filters,
    filterByNumericValues,
  } = useContext(PlanetContext);
  const filter1 = filterNum(
    data.results,
    filterByNumericValues[filterByNumericValues.length - 1]);
  const filter2 = filterNum(
    filter1,
    filterByNumericValues[filterByNumericValues.length - 2]);
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
      <tbody>{mapArray(filterName(filters, filterNum(filter2)))}</tbody>
    </table>
  );
}

export default Table;
