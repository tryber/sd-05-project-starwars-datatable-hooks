import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import fetchPlanets from '../../services/planets';
import FilterPlanet from '../FilterPlanet';
import FilterNumeric from '../FilterNumeric';
import FilterAsc from '../FilterAsc';
import FilterActive from '../FilterActive';
import Cabecalho from './Cabecalho';
import TBody from './TBody';

// Lucas Staroscky filterNumber

function filterNumber(allPlanets, filter) {
  switch (filter.comparison) {
    case 'maior que':
      return allPlanets.filter(
        (planet) => Number(planet[filter.column]) > Number(filter.value)
      );
    case 'menor que':
      return allPlanets.filter(
        (planet) => Number(planet[filter.column]) < Number(filter.value)
      );
    case 'igual a':
      return allPlanets.filter(
        (planet) => Number(planet[filter.column]) === Number(filter.value)
      );
    default:
      return allPlanets;
  }
}

function filterFunc(data, name, numericFilter) {
  let allPlanets = [];

  if (name !== '') {
    allPlanets = data.filter(
      (el) => el.name.toLowerCase().indexOf(name.toLowerCase()) >= 0
    );
  }
  numericFilter.forEach((filter) => {
    allPlanets = filterNumber(data, filter);
  });

  if (allPlanets.length === 0) {
    allPlanets = data;
  }
  return allPlanets;
}

const Table = () => {
  const {
    data,
    filterByName,
    setData,
    fetching,
    setFetching,
    numericFilter,
  } = useContext(StarWarsContext);
  useEffect(() => {
    setFetching(true);
    fetchPlanets()
      .then((response) => response)
      .then((json) => {
        setData(json.results);
        setFetching(false);
      });
  }, [setData, setFetching]);

  const allPlanets = filterFunc(data, filterByName, numericFilter);
  if (fetching) return <h1>Carregando</h1>;

  return (
    <div>
      <div className="form">
        <FilterPlanet />
        <FilterNumeric />
        <FilterAsc />
        <FilterActive />
      </div>
      <table>
        <Cabecalho />
        <TBody allPlanets={allPlanets} />
      </table>
    </div>
  );
};

export default Table;
