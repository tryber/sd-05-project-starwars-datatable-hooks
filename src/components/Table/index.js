import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import fetchPlanets from '../../services/planets';
import FilterPlanet from '../FilterPlanet';
import Cabecalho from './Cabecalho';
import TBody from './TBody';
// Lucas Staroscky filterNumber

// function filterNumber(allPlanets, filter) {
//   switch (filter.comparison) {
//     case 'maior que':
//       return allPlanets.filter(
//         (planet) => Number(planet[filter.column]) > Number(filter.value)
//       );
//     case 'menor que':
//       return allPlanets.filter(
//         (planet) => Number(planet[filter.column]) < Number(filter.value)
//       );
//     case 'igual a':
//       return allPlanets.filter(
//         (planet) => Number(planet[filter.column]) === Number(filter.value)
//       );
//     default:
//       return allPlanets;
//   }
// }

function filterFunc(data, name, filterByNumericValues = 0) {
  let allPlanets = [];

  if (name !== '') {
    allPlanets = data.filter(
      (el) => el.name.toLowerCase().indexOf(name.toLowerCase()) >= 0,
    );
  }
  //   filterByNumericValues.forEach((filter) => {
  //     allPlanets = filterNumber(allPlanets, filter);
  //   });
  console.log(filterByNumericValues);
  if (allPlanets.length === 0) {
    allPlanets = data;
  }
  return allPlanets;
}

const Table = () => {
  const {
    data,
    name,
    setData,
    isFetching,
    setIsFetching,
    //filterByNumericValues,
  } = useContext(StarWarsContext);

  useEffect(() => {
    setIsFetching(true);
    fetchPlanets()
      .then((response) => response)
      .then((json) => {
        setData(json.results);
        setIsFetching(false);
      });
  }, [setData, setIsFetching]);

  const filterByNumericValues = 10;
  const allPlanets = filterFunc(data, name, filterByNumericValues);

  if (isFetching) return <h1>Carregando</h1>;

  return (
    <div>
      <div className="form">
        <FilterPlanet />
      </div>
      <table>
        <Cabecalho />
        <TBody allPlanets={allPlanets} />
      </table>
    </div>
  );
};

export default Table;
