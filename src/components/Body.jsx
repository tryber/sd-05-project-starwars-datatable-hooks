import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import fetchPlanets from '../services/API';
import PropTypes from 'prop-types';

const columnNumbers = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

const Body = () => {
  const {
    planetsData,
    setPlanetsData,
    fetching,
    setFetching,
    filterByName,
    filterByNumericValues,
    order,
  } = useContext(StarWarsContext);
  useEffect(() => {
    setFetching(true);
    fetchPlanets().then((response) => {
      setPlanetsData(response.results);
      setFetching(false);
    });
  }, [setPlanetsData, setFetching]);

  const sortMe = (planets, column, sort) => {
    const sorter = planets.sort(
      (a, b) => +a[column.toLowerCase()] - +b[column.toLowerCase()]
    );
    if (columnNumbers.includes(column.toLowerCase())) {
      if (sort === 'ASC') {
        return sorter;
      }
      return sorter.reverse();
    }
    if (sort === 'ASC') {
      return planets.sort((a, b) =>
        a[column.toLowerCase()] > b[column.toLowerCase()] ? 1 : -1
      );
    }
    return planets.sort((a, b) =>
      a[column.toLowerCase()] < b[column.toLowerCase()] ? 1 : -1
    );
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

  let filterAll = FilterPlanets(planetsData, filterByNumericValues);
  filterAll = sortMe(filterAll, order.column, order.sort);
  let filters = filterByName.name;
  if (fetching) {
    return (
      <tbody>
        <tr>
          <td>Loading...</td>
        </tr>
      </tbody>
    );
    /* Alterado de Div para td pra evitar erro chato de DOM que não prejudica funcionamento porém
      incomoda*/
  }
  return (
    <tbody>
      {filterAll
        .filter((planet) => planet.name.includes(filters))
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

Body.propTypes = {
  fetchPlanets: PropTypes.func.isRequired,
  planetsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetching: PropTypes.bool.isRequired,
  filters: PropTypes.string.isRequired,
  filterNum: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.arrayOf(PropTypes.object).isRequired,
};
