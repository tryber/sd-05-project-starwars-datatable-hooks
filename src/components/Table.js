import React, { useContext } from 'react';

import { StarWarsContext } from '../context/StarWarsContextProvider';

function TableHead() {
  return (
    <thead>
      <tr>
        <th><strong>Name</strong></th>
        <th><strong>Rotation Period</strong></th>
        <th><strong>Orbital Period</strong></th>
        <th><strong>Diameter</strong></th>
        <th><strong>Climate</strong></th>
        <th><strong>Gravity</strong></th>
        <th><strong>Terrain</strong></th>
        <th><strong>Surface Water</strong></th>
        <th><strong>Population</strong></th>
        <th><strong>Films</strong></th>
        <th><strong>Created</strong></th>
        <th><strong>Edited</strong></th>
        <th><strong>URL</strong></th>
      </tr>
    </thead>
  );
}

function TableBody() {
  const { data } = useContext(StarWarsContext);

  return (
    <tbody>
      {data.map((planet) => (
        <tr key={planet.name}>
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
      ),
    )}
    </tbody>
  );
}

function Table() {
  const { loading } = useContext(StarWarsContext);

  return (loading)
  ? <div>Loading...</div>
  : (
    <table>
      <TableHead />
      <TableBody />
    </table>
  );
}

export default Table;
