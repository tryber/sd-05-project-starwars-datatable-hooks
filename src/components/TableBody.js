import React, { useContext } from 'react';
import MyContext from '../context/context';
import renderTableBody from '../components/filters/index';

const filterInput = (planets, filterByName) => planets.filter((e) => e.name.includes(filterByName));

// based in: https://github.com/tryber/sd-05-project-starwars-datatable-hooks/blob/nat-react-context-hooks-starwars-datatable-filters/src/components/TableInfo.js
function filterNumber(allPlanets, filter) {
  switch (filter.comparison) {
    case 'maior que':
      return allPlanets.filter((planet) => Number(planet[filter.column]) > Number(filter.value));
    case 'menor que':
      return allPlanets.filter((planet) => Number(planet[filter.column]) < Number(filter.value));
    case 'igual a':
      return allPlanets.filter((planet) => Number(planet[filter.column]) === Number(filter.value));
    default:
      return allPlanets;
  }
}

function TableBody() {
  const { data, filterName, filterByNumericValues, loading } = useContext(MyContext);
  let allPlanets = data;
  allPlanets = filterInput(data, filterName)
  filterByNumericValues.forEach((filter) => { allPlanets = filterNumber(allPlanets, filter); });
 return loading ? <p>Loading</p> : renderTableBody(allPlanets)
}

export default TableBody;
