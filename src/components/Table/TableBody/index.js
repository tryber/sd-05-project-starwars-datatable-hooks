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

// const filterPlanet = (planetList = [], filter) => {
//   const { column, comparison, value } = filter;
//   return planetList.filter((planet) => {
//     switch (comparison) {
//       case 'maior que':
//         return Number(planet[column]) > Number(value);
//       case 'igual a':
//         return Number(planet[column]) === Number(value);
//       case 'menor que':
//         return Number(planet[column]) < Number(value);
//       default:
//         return planet;
//     }
//   });
// };

// const sortPlanets = (planets, sort, column) => {
//   if (sort === 'DESC') {
//     return planets.sort((a, b) => Number(b[column]) - Number(a[column]));
//   }
//   if (sort === 'ASC') {
//     return planets.sort((a, b) => Number(a[column]) - Number(b[column]));
//   }
//   return false;
// };

const TableBody = () => {
  const { data, setData, fetching, setFetching } = useContext(SWContext);
  useEffect(() => {
    setFetching(true);
    fetchPlanets()
      .then((data) => data)
      .then((json) => {
        setData(json.results);
        setFetching(false);
      });
  }, [setData, setFetching]);

  return (
    <tbody>
      {fetching ? (
        <div>Loading...</div>
      ) : (
        data
          // .filter((planet) => planet.name.toLowerCase().includes(nameFilter.toLowerCase()))
          .map((planet) => (
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
              <td>{planet.films.map((film) => Films[film]).join(', ')}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))
      )}
    </tbody>
  );
};

export default TableBody;
