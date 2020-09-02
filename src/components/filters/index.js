import React from 'react';

function renderTableBody(allPlanets) {
  return allPlanets.map((planet) => (
    <tbody className="table-body">
      <tr key={planet.name}>
        <td key={planet.name}>{planet.name}</td>
        <td key={planet.rotation_period}>{planet.rotation_period}</td>
        <td key={planet.orbital_period}>{planet.orbital_period}</td>
        <td key={planet.diameter}>{planet.diameter}</td>
        <td key={planet.climate}>{planet.climate}</td>
        <td key={planet.gravity}>{planet.gravity}</td>
        <td key={planet.terrain}>{planet.terrain}</td>
        <td key={planet.surface_water}>{planet.surface_water}</td>
        <td key={planet.population}>{planet.population}</td>
        <td key={planet.films} align="start">{planet.films}</td>
        <td key={planet.url}>{planet.url}</td>
        <td key={planet.created}>{planet.created}</td>
        <td key={planet.edited}>{planet.edited}</td>
      </tr>
    </tbody>
  ))
};

export default renderTableBody;
