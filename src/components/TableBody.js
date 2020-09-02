import React, { useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';

const TableBody = () => {
  // filterByNumericValues
  const { data, nameFilter } = useContext(StarWarsContext);
  const NameFilteredPlanets = data.filter((planets) => planets.name.includes(nameFilter));
  // {(name)}
  //   NameFilteredPlanets

  return (
    ((NameFilteredPlanets.length > 0) ? NameFilteredPlanets : data)
      .map((planet) => (
        <tbody key={planet.name}>
          <tr>
            <td >{planet.name}</td>
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
      ))
  );
};

export default TableBody;

// ((filterByNumericValues) ?
// ..(datafilterfunction(NameFilteredPlanets, filterByNumericValues)) : NameFilteredPlanets)
