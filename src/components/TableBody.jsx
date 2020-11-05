// fetch failed on last evaluator step push x4
import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
// data filter desenvolvido com a ajuda do colega de turma PR Zambelli
import TableFunction from '../helpers/TableFunction';

const TableBody = () => {
  const { data, numericFilter, sortOrder, atribute, setPlanetasSort } = useContext(StarWarsContext);
  let planetasDoHugo = data;
  numericFilter.forEach((filtro) => {
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
  setPlanetasSort(planetasDoHugo.sort((a, b) => {
    const objA = a[atribute].toLowerCase();
    const objB = b[atribute].toLowerCase();
    let comparacaoSort;
    if (isNaN(objA) || isNaN(objB)) {
      comparacaoSort = objB < objA ? 1 : -1;
    } else {
      comparacaoSort = objB - objA;
    }
    if (sortOrder) {
      return comparacaoSort;
    } return comparacaoSort * (-1);
  }));
  return (
    <TableFunction />
  );
};

export default TableBody;
