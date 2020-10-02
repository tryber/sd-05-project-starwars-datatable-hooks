import React from 'react';
import Context from '../context/StarWarsContext';
import Planeta from './planeta';
import { useContext } from 'react';

const applyComparison = (planeta, filtro) => {
  const { column, comparison, value } = filtro;
  if (comparison === 'menor que') {
    // [column] generaliza, para nao ter que usar .population, .diameter, etc...
    return Number(planeta[column]) < value; // true ou false
  } else if (comparison === 'maior que') {
    // planeta -> objeto, pode ser dot notation -> obj.chave, ou obj[chave]
    return Number(planeta[column]) > value; // true ou false
  } else if (comparison === 'igual a') {
    return Number(planeta[column]) === Number(value); // true ou false
  }
  return planeta;
};
// variável para conter valores numéricos
const TituloNumerico = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

const Body = () => {
  // função para ordenar, recebe um array de planetas
  // ordena através do column selecionado, em ordem ascendente ou descendente
  const {
    filterByName: nomeProcurado,
    selectedOption: options,
    order,
    filterByNumericValues,
    data: planetas,
  } = useContext(Context);
  function OrdemEProgresso(planetas) {
    const { column, sort } = order;
    if (TituloNumerico.includes(order.column)) {
      if (sort === 'ASC') {
        return planetas.sort((a, b) => a[column.toLowerCase()] - b[column.toLowerCase()]);
      }
      return planetas.sort((a, b) => b[column.toLowerCase()] - a[column.toLowerCase()]);
    }
    if (sort === 'ASC') {
      return planetas.sort((a, b) => (a.name < b.name ? -1 : 1));
    }
    return planetas.sort((a, b) => (a.name > b.name ? -1 : 1));
  }
  let planets = planetas;

  /* Filtro que transforma .name do objeto planeta em letras minusculas,
    procurando o index(posição) do nome dentro da propriedade name do objeto planeta. */
  planets = planets.filter(
    (planeta) => planeta.name.toLowerCase().indexOf(nomeProcurado.toLowerCase()) >= 0
  );

  filterByNumericValues.forEach((filtro) => {
    planets = planets.filter((planeta) => applyComparison(planeta, filtro));
  });

  planets = OrdemEProgresso(planets);

  return (
    <tbody>
      {planets.map((planeta) => (
        <Planeta key={planeta.name} planeta={planeta} />
      ))}
    </tbody>
  );
};
const mapStateToProps = (state) => ({
  planetas: state.reducerApi.data,
  nomeProcurado: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
  options: state.filters.selectedOption,
  order: state.filters.order,
});

export default Body;
