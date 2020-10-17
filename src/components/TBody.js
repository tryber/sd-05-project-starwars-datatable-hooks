import React, { useContext } from 'react';
import SWContext from '../context/swContext';

function bodyRender(planeta) {
  return (
    <tr key={planeta.name}>
      <td data-testid="planet-name">{planeta.name}</td>
      <td>{planeta.rotation_period}</td>
      <td>{planeta.orbital_period}</td>
      <td>{planeta.diameter}</td>
      <td>{planeta.climate}</td>
      <td>{planeta.gravity}</td>
      <td>{planeta.terrain}</td>
      <td>{planeta.surface_water}</td>
      <td>{planeta.population}</td>
      <td>{planeta.films}</td>
      <td>{planeta.created}</td>
      <td>{planeta.edited}</td>
      <td>{planeta.url}</td>
    </tr>
  );
}

const colunasNumericas = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function FiltroNumerico(planetas) {
  const { filterByNumericValues: filtros } = useContext(SWContext);
  let planetasFiltrados = planetas;
  filtros.forEach((filtro) => {
    const { column, comparison, value } = filtro;
    if (comparison === 'maior que') {
      planetasFiltrados = planetasFiltrados.filter((planeta) => planeta[column] > Number(value));
    }
    if (comparison === 'menor que') {
      planetasFiltrados = planetasFiltrados.filter((planeta) => planeta[column] < Number(value));
    }
    if (comparison === 'igual a') {
      planetasFiltrados = planetasFiltrados.filter((planeta) => planeta[column] === value);
    }
  });
  return planetasFiltrados;
}

function OrdenaPlaneta(planetasAlterados) {
  const { order: ordem } = useContext(SWContext);
  let ordenado = [];
  if (colunasNumericas.includes(ordem.column)) {
    ordenado = planetasAlterados.sort((a, b) => Number(a[ordem.column]) - Number(b[ordem.column]));
  } else {
    ordenado = planetasAlterados.sort((a, b) =>
      (a[ordem.column.toLowerCase()] > b[ordem.column.toLowerCase()] ? 1 : -1),
    );
  }
  if (ordem.sort === 'DESC') {
    return ordenado.reverse();
  }
  return ordenado;
}

function TBody() {
  const { data, filterByName: names } = useContext(SWContext);
  let planetasAlterados = FiltroNumerico(data);
  planetasAlterados = OrdenaPlaneta(planetasAlterados);

  return (
    <tbody>
      {planetasAlterados
        .filter((planeta) => planeta.name.includes(names))
        .map((planeta) => bodyRender(planeta))}
    </tbody>
  );
}

export default TBody;
