import React, { useContext, useEffect } from 'react';
import SWContext from '../../../context/SWContext';
import fetchPlanets from '../../../util/api';

const Films = {
  'https://swapi-trybe.herokuapp.com/api/films/1/': 'A New Hope',
  'https://swapi-trybe.herokuapp.com/api/films/2/': 'The Empire Strikes Back',
  'https://swapi-trybe.herokuapp.com/api/films/3/': 'Return of the Jedi',
  'https://swapi-trybe.herokuapp.com/api/films/4/': 'The Phantom Menace',
  'https://swapi-trybe.herokuapp.com/api/films/5/': 'Attack of the Clones',
  'https://swapi-trybe.herokuapp.com/api/films/6/': 'Revenge of the Sith',
};

const filterPlanet = (planetList = [], filter) => {
  const { column, comparison, value } = filter;
  return planetList.filter((planet) => {
    switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(value);
      case 'igual a':
        return Number(planet[column]) === Number(value);
      case 'menor que':
        return Number(planet[column]) < Number(value);
      default:
        return planet;
    }
  });
};

const sortPlanets = (planets, { columnValue, sortValue }) => {
  if (sortValue === 'DESC') {
    return planets.sort((a, b) => Number(b[columnValue]) - Number(a[columnValue]));
  }
  if (sortValue === 'ASC') {
    return planets.sort((a, b) => Number(a[columnValue]) - Number(b[columnValue]));
  }
  return planets;
};

const TableBody = () => {
  const { data, setData, fetching, setFetching, filterByName, numericFilter, sort } = useContext(
    SWContext,
  );
  useEffect(() => {
    setFetching(true);
    fetchPlanets()
      .then((response) => response)
      .then((json) => {
        setData(json.results);
        setFetching(false);
      });
  }, [setData, setFetching]);
  let planetList = data.sort((a, b) => a.name.localeCompare(b.name));;
  planetList = sortPlanets(planetList, sort )
  numericFilter.forEach((filter) => {
    planetList = filterPlanet(planetList, filter);
  });
  return fetching ? (
    <tbody>
      <tr>
        <td>Loading...</td>
      </tr>
    </tbody>
  ) : (
    <tbody>
      {planetList
        .filter((planet) => planet.name.toLowerCase().includes(filterByName.toLowerCase()))
        .map((planet) => (
          <tr key={planet.name}>
            <td data-testid="planet-name">{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films.map((film) => Films[film]).join(', ')}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
