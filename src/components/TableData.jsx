import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
// import PropTypes from 'prop-types';
import './Table.css';

function tableBody(planet) {
  return (
    <tr key={planet.name}>
      <td>{planet.name}</td>
      <td>{planet.climate}</td>
      <td>{planet.terrain}</td>
      <td>{planet.diameter}</td>
      <td>{planet.gravity}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.population}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.films}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
      <td>{planet.url}</td>
    </tr>
  );
}

export default function TableData() {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName, filterByNumericValues } = filters;

  useEffect(() => {
    console.log(filterByNumericValues);
    filterByNumericValues.forEach((filtro) => {
      const { column } = filtro;
      document.getElementById(column).setAttribute('hidden', '');
    });
  }, [filterByNumericValues]);

  function numericFilter() {
    let planetas = data;
    filterByNumericValues.forEach((filtro) => {
      const { comparison, column, value } = filtro;
      if (comparison === 'maior que') {
        planetas = planetas.filter((planet) => planet[column] > Number(value));
      } else if (comparison === 'menor que') {
        planetas = planetas.filter((planet) => planet[column] < Number(value));
      } else {
        planetas = planetas.filter((planet) => planet[column] === value);
      }
    });
    return (
      <tbody className="table">{planetas.map((planet) => tableBody(planet))}</tbody>
    );
  }

  function nameFilter() {
    const dataFilteredByName = data.filter((planet) => planet.name.includes(filterByName.name));
    return (
      <tbody className="table">{dataFilteredByName.map((planet) => tableBody(planet))}</tbody>
    );
  }

  function allPlanets() {
    return (
      <tbody className="table">{data.map((planet) => tableBody(planet))}</tbody>
    );
  }

  if (filterByName.name !== undefined) { return nameFilter(); }
  if (
    filterByName.name === undefined &&
    filterByNumericValues.comparison !== '' &&
    filterByNumericValues.column !== '' &&
    filterByNumericValues.value !== ''
  ) { return numericFilter(); }
  return allPlanets();
}
