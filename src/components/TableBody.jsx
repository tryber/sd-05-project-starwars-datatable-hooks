import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const TableBody = () => {
  const { data, filterName, numericFilter } = useContext(StarWarsContext);
  let planetasDoHugo = data;
//   numericFilter.forEach((filtro) => {
//     planetasDoHugo = planetasDoHugo.filter((planets) => {
//       let option = null;
//       switch (filtro.comparison) {
//         case 'maior que':
//           option = Number(planets[filtro.column]) > Number(filtro.value); break;
//         case 'menor que':
//           option = Number(planets[filtro.column]) < Number(filtro.value); break;
//         case 'igual a':
//           option = Number(planets[filtro.column]) === Number(filtro.value); break;
//         default:
//           console.log('select a valid option!');
//           break;
//       }
//       return option;
//     },
// );
//   });
  return (
    // data filter desenvolvido com a ajuda do colega de turma PR Zambelli
    // planetasDoHugo.filter(
    //   (planets) => (filterName !== '' ? planets.name.toLowerCase().includes(filterName) : data)).map(
      planetasDoHugo.map(
            (planet) => 
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
              {planet.films.map((film) => (<span key={film}>{film}</span>))}
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        // ),
      )
  );
};

export default TableBody;
