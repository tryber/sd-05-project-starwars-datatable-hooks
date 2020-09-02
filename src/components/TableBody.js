import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import getPlanets from '../services/starAPI';
import queryFilters from '../services/queryFilters';

export default function TableBody() {
  const { data, setData, setError, textFilter, filterByNumericValues } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets()
      .then(
        (response) => setData(() => response.results),
        (error) => setError(() => error),
      );
  }, []);

  const planets = queryFilters(data, textFilter, filterByNumericValues);

  return (
    <tbody>
      {planets.map((planet) => (
        <tr key={planet.name}>
          <td>{planet.name}</td>
          <td>{planet.climate}</td>
          <td>{planet.terrain}</td>
          <td>{planet.diameter}</td>
          <td>{planet.gravity}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.population}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))}
    </tbody>
  );
}
