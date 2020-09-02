import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

// function filterByNumber(arrayPlanets, filter) {
//   if (filter.comparison === 'maior que') {
//     return arrayPlanets.filter((planet) => Number(planet[filter.column]) > Number(filter.value));
//   }
//   if (filter.comparison === 'menor que') {
//     return arrayPlanets.filter((planet) => Number(planet[filter.column]) < Number(filter.value));
//   }
//   if (filter.comparison === 'igual a') {
// urn arrayPlanets.filter((planet) => Number(planet[filter.column]) === Number(filter.value));
//   }
//   return arrayPlanets;
// }

// tabela que receberá o corpo da função
export default function TableInfo() {
  const { data } = useContext(StarWarsContext);

  // // Filtro por numero
  // let filterPlanets = data;
  // filterByNumericValues.forEach((filter) => {
  //   filterPlanets = filterByNumber(filterPlanets, filter);
  // });

  // filterPlanets = filterPlanets.filter(
  //   (input) => input.name.toUpperCase().includes(text.name.toUpperCase()),
  // );

  return data.map((planet) => (
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
