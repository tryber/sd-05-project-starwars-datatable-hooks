import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import fetchPlanets from '../services/API';

const columnNumbers = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];
const sortMe = (planets, order) => {
  const { sort, column } = order;
  const sorter = planets.sort((a, b) => +a[column.toLowerCase()] - +b[column.toLowerCase()]);
  if (columnNumbers.includes(column.toLowerCase())) {
    if (sort === 'ASC') {
      return sorter;
    }
    return sorter.reverse();
  }
  if (sort === 'ASC') {
    return planets.sort((a, b) => (a[column.toLowerCase()] > b[column.toLowerCase()] ? 1 : -1));
  }
  return planets.sort((a, b) => (a[column.toLowerCase()] < b[column.toLowerCase()] ? 1 : -1));
};

const FilterPlanets = (planetsData, filterNum) => {
  let filtered = [...planetsData];
  if (filterNum.length > 0) {
    filterNum.forEach((filter) => {
      const { column, comparison, value } = filter;
      if (comparison === 'maior que') {
        filtered = filtered.filter((planet) => +planet[column] > +value); // + vira number
      } else if (comparison === 'menor que') {
        filtered = filtered.filter((planet) => +planet[column] < +value);
      } else {
        filtered = filtered.filter((planet) => +planet[column] === +value);
      }
    });
  }

  return filtered;
};

const Body = () => {
  const {
    planetsData, setPlanetsData, fetching, setFetching, filterByName, filterByNumericValues, order,
  } = useContext(StarWarsContext);

  useEffect(() => {
    setFetching(true);
    fetchPlanets().then((response) => {
      setPlanetsData(response.results);
      setFetching(false);
    });
  }, [setPlanetsData, setFetching]);

  let filterAll = FilterPlanets(planetsData, filterByNumericValues);
  filterAll = sortMe(filterAll, order);
  const filters = filterByName.name;
  if (fetching) {
    return (<tbody><tr><td>Loading...</td></tr></tbody>);
    /* Alterado de Div para td pra evitar erro chato de DOM que não prejudica funcionamento porém
      incomoda*/
  }
  return (
    <tbody>
      {filterAll
        .filter((planet) => planet.name.includes(filters))
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
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default Body;

/* const mapStateToProps = (state) => ({
  planetsData: state.planetsReducer.planetsData,
  fetching: state.planetsReducer.fetching,
  filters: state.filters.filterByName.name,
  filterNum: state.filters.filterByNumericValues,
  order: state.filters.order,
}); */
