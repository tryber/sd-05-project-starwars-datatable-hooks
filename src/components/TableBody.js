import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import getPlanets from '../services/starAPI';

export default function TableBody() {
  const { data, setData, setError } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets()
      .then(
        () => setData(() => data.results),
        () => setError(() => error),
      );
  }, []);

  return (
    <tbody>
      {data.map((planet) => (
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
