import React, { useContext } from 'react';
import StarWarsContext from '../context/context';

function filterNumber(allPlanets, filter) {
  switch (filter.comparison) {
    case 'maior que':
      return allPlanets.filter((planet) => Number(planet[filter.column]) > Number(filter.value));
    case 'menor que':
      return allPlanets.filter((planet) => Number(planet[filter.column]) < Number(filter.value));
    case 'igual a':
      return allPlanets.filter((planet) => Number(planet[filter.column]) === Number(filter.value));
    default:
      return allPlanets;
  }
}

function filterName(planets, input) {
  return (planets.filter(
    (planet) => planet.name.toLowerCase().includes(input.toLowerCase()),
  ));
}

export default function TableBody() {
  const { data, name, filterByNumericValues } = useContext(StarWarsContext);
  let allPlanets = data;
  filterByNumericValues.forEach((filter) => { allPlanets = filterNumber(allPlanets, filter); });
  allPlanets = filterName(allPlanets, name);
  return (
    allPlanets.map((planet) => (
      <tbody key={planet.name}>
        <tr>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      </tbody>
    )));
}
