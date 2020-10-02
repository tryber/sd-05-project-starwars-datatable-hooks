import React, { useEffect, useContext } from 'react';
import Headers from './HeaderTabela';
import FiltrosDaPagina from './HeaderPagina';
import SWContext from '../context/StarWarsContext';
import StarWarsPlanetsAPI from '../services/StarWarsPlanetsAPI';

function filterByNumber(arrayPlanets, filterByNumericValues) {
  if (filterByNumericValues.comparison === 'maior que') {
    return arrayPlanets
      .filter((planet) =>
        Number(planet[filterByNumericValues.column]) > Number(filterByNumericValues.value));
  }
  if (filterByNumericValues.comparison === 'menor que') {
    return arrayPlanets
      .filter((planet) =>
        Number(planet[filterByNumericValues.column]) < Number(filterByNumericValues.value));
  }
  if (filterByNumericValues.comparison === 'igual a') {
    return arrayPlanets
      .filter((planet) =>
        Number(planet[filterByNumericValues.column]) === Number(filterByNumericValues.value));
  }
  return arrayPlanets;
}

const filtraPlanetas = (planetas, filtroDeTexto, filterByNumericValues, order) => {
  let planetasExibidos = planetas;
  filterByNumericValues.forEach((filter) => {
    planetasExibidos = filterByNumber(planetasExibidos, filter);
  });

  if (filtroDeTexto !== '') {
    planetasExibidos = planetasExibidos.filter((planet) => planet.name
      .toLowerCase().includes(filtroDeTexto.toLowerCase()));
  }

  planetasExibidos = planetasExibidos.sort((a, b) => {
    if (isNaN(a[order.column])) {
      if (order.sort === 'ASC') {
        return a[order.column.toLowerCase()] < b[order.column.toLowerCase()] ? -1 : 1;
      }
      // console.log('order', order);
      return a[order.column.toLowerCase()] > b[order.column.toLowerCase()] ? -1 : 1;
    }
    if (order.sort === 'ASC') {
      return parseInt(a[order.column], 10) - parseInt(b[order.column], 10);
    }
    return parseInt(b[order.column], 10) - parseInt(a[order.column], 10);
  });
  return [...planetasExibidos];
};

function renderUseEffect(setIsFetching, setData) {
  useEffect(() => {
    setIsFetching(true);
    StarWarsPlanetsAPI().then((resp) => setData(resp.results));
    setIsFetching(false);
  }, [setIsFetching, setData]);
}

function Table() {
  const {
    isFetching,
    setIsFetching,
    setData,
    data,
    filterByName,
    filterByNumericValues,
    order,
  } = useContext(SWContext);

  renderUseEffect(setIsFetching, setData);

  function renderTable() {
    return filtraPlanetas(data, filterByName, filterByNumericValues, order).map((planet) => (
      <tr>
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
    ));
  }

  return (
    <div>
      <div>
        <FiltrosDaPagina />
      </div>
      <table>
        <Headers />
        <tbody>
          {renderTable()}
        </tbody>
      </table>
      {isFetching && 'Loading...'}
    </div>
  );
}

/*
  {fazendoRequisicao && 'Loading...'} enquanto fazendoRequisicao
  for true, o texto loading vai aparecer na tela.
*/

/*
  mapStateToProps faz o papel do subscribe no redux
  e no react faz papel no render
*/

/*
  O valor do state do verificandoRequisicaoAPI
  vai ser três infos(o state, o reducer que
  contêm a action e a action que quero)
*/

/* A function filterByNumber foi retirado do código
da minha colega de turma Nat Macedo e adpatado para o meu código*/

/* os states que vou usar mapStateToProps vem do initial_state do reducer*/
// const mapStateToProps = (state) => ({
//   fazendoRequisicao: state.planetsReducer.fazendoRequisicao,
//   data: filtraPlanetas(
//     state.planetsReducer.data,
//     state.filters.filterByName.name,
//     state.filters.filterByNumericValues,
//     state.filters.order),
//   filterByNumericValues: state.filters.filterByNumericValues,
// });

// const mapDispatchToProps = (dispatch) => ({
//   StarWarsPlanetsAPI: () => dispatch(fetchAPIStarWarsPlanets()),
// });

export default Table;
/* Estrutura retirada dos exercícios do bloco 16 */
