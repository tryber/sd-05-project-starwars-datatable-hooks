import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function filterByNumber(filterPlanets, filter) {
  if (filter.comparison === 'maior que') {
    return filterPlanets.filter((planet) => Number(planet[filter.column]) > Number(filter.value));
  }
  if (filter.comparison === 'menor que') {
    return filterPlanets.filter((planet) => Number(planet[filter.column]) < Number(filter.value));
  }
  if (filter.comparison === 'igual a') {
    return filterPlanets.filter((planet) => Number(planet[filter.column]) === Number(filter.value));
  }
  return filterPlanets;
}

// tabela que receberá o corpo da função
export default function TableInfo() {
  const { data, textInput, filterByNumericValues } = useContext(StarWarsContext);

  let filterPlanets = data;
  // Filtro por numero
  filterByNumericValues.forEach((filter) => {
    filterPlanets = filterByNumber(filterPlanets, filter);
  });

  filterPlanets = filterPlanets.filter(
    (planet) => planet.name.toUpperCase().includes(textInput.toUpperCase()),
  );
  return filterPlanets.map((planet) => (
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
  ));
}
