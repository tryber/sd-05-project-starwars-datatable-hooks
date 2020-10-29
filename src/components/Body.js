import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const opcaoFiltro = (allData, name, numericFilters) => {
  let opFilter = [];
  if (name === '') opFilter = allData;
  if (name !== '') {
    opFilter = allData.filter((planet) => planet.name.includes(name));
  }
  if (numericFilters.length > 0) {
    numericFilters.forEach((filter) => {
      if (filter.comparison === 'maior que') {
        opFilter = opFilter.filter((planet) => planet[filter.column] > Number(filter.value));
      }
      if (filter.comparison === 'menor que') {
        opFilter = opFilter.filter((planet) => planet[filter.column] < Number(filter.value));
      }
      if (filter.comparison === 'igual a') {
        opFilter = opFilter.filter((planet) => planet[filter.column] === filter.value);
      }
    });
  }
  return opFilter;
};

const colunas = ['rotation_period', 'orbital_period', 'diameter', 'surface_water', 'population'];

const sortAsc = (filtro, column) => filtro.sort((a, b) => Number(a[column]) - Number(b[column]));

const sortAscAlfab = (filtro, column) =>
  filtro.sort((a, b) => {
    if (a[column] > b[column]) return 1;
    if (a[column] < b[column]) return -1;
    return 0;
  });

const orderAscDesc = (filtro, column, sort) => {
  const sorted = colunas.includes(column) ? sortAsc(filtro, column) : sortAscAlfab(filtro, column);
  return sort === 'DESC' ? sorted.reverse() : sorted;
};

function Body() {
  const { data, filters, order } = useContext(StarWarsContext);
  const name = filters.filterByName.name;
  const todosFilters = filters.filterByNumericValues;
  const coluna = order.column.toLowerCase();
  const ordenar = order.ordenar;

  const filtrar = opcaoFiltro(data, name, todosFilters);
  const organizar = orderAscDesc(filtrar, coluna, ordenar);

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0])
            .filter((element) => element !== 'residents')
            .map((key) => (
              <th key={key}>{key}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {organizar.map(({ residents, ...planet }) => (
          <tr key={planet.name}>
            <td data-testid="planet-name">{planet.name}</td>
            {Object.values(planet)
              .filter((value) => value !== planet.name)
              .map((value) => (
                <td key={value}>{value}</td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Body;
