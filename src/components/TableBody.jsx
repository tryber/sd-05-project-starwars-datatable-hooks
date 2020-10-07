import React, { useContext, useEffect, } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import getPlanets from '../services/api';

const TableBody = () => {
  const { data, setData, results, setResults, searchTerm,loading, setLoading, type, setType } = useContext(StarWarsContext);
  useEffect(() => {
    setLoading(true);
    getPlanets().then((response) => setData(response.results));
    setLoading(false);
    setType(data);
  }, [ setData, loading, ]);
  useEffect(() => {
    console.log(searchTerm);
    searchTerm === '' ? setType(data) : setType(results)
    setResults(data.filter(
      planets => planets.name.toLowerCase().includes(searchTerm.name)
      ));
  }, [searchTerm,]);
  console.log(type)
  return (
    type.map((planet) => (
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
        <td>
          {planet.films.map((film) => (
            <span key={film}>{film}</span>
          ))}
        </td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>{planet.url}</td>
      </tr>))
  );
};

export default TableBody;
