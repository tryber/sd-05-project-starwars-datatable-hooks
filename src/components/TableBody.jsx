// fetch failed on last evaluator step push x4
import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
// data filter desenvolvido com a ajuda do colega de turma PR Zambelli

const TableBody = () => {
  const { data, numericFilter, sortOrder, atribute, filterName } = useContext(StarWarsContext);
  let planetasDoHugo = data; numericFilter.forEach((filtro) => {
    planetasDoHugo = planetasDoHugo.filter((planets) => {
      let option = null;
      switch (filtro.comparison) {
        case 'maior que':
          option = Number(planets[filtro.column]) > Number(filtro.value); break;
        case 'menor que':
          option = Number(planets[filtro.column]) < Number(filtro.value); break;
        case 'igual a':
          option = Number(planets[filtro.column]) === Number(filtro.value); break;
        default:
          console.log('select a valid option!');
          break;
      }
      return option;
    },
    );
  });
  planetasDoHugo = planetasDoHugo.sort(function (a, b) {
    const objA = a[atribute].toLowerCase();
    const objB = b[atribute].toLowerCase();
    let comparacaoSort;
    if (isNaN(objA) || isNaN(objB)) {
      comparacaoSort = objB < objA ? 1 : -1;
    } else {
      comparacaoSort = objA - objB;
    }
    if (sortOrder) {
      return comparacaoSort;
    } return comparacaoSort * (-1);
  });
  return (
    planetasDoHugo.filter((planets) => (filterName !== '' ? planets.name.toLowerCase().includes(filterName) : data)).map(
      (planet) => (
        <tr key={planet.name}>
          <td data-testid="planet-name">{planet.name}</td><td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td><td>{planet.diameter}</td><td>{planet.climate}</td>
          <td>{planet.gravity}</td><td>{planet.terrain}</td><td>{planet.surface_water}</td>
          <td>{planet.population}</td><td>{planet.films.map(
            (film) => (<span key={film}>{film}</span>))}</td>
          <td>{planet.created}</td><td>{planet.edited}</td><td>{planet.url}</td>
        </tr>
      ),
    ));
};

export default TableBody;
