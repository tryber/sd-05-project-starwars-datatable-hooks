import React, { useState, useContext } from 'react';
import SWContext from '../context/StarWarsContext';
// import PropTypes from 'prop-types';

/*
columns representa a lista com todas as opções possíveis de coluna
*/

const columns = [
  'Coluna',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const AllColumns = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

const options = [
  'Comparação',
  'maior que',
  'menor que',
  'igual a',
];

function FiltrosDaPagina() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);
  const [sortColumn, setSortColumn] = useState('');
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    setFilterByName,
    order,
    setOrder,
    setRemoverFiltroDaTela
  } = useContext(SWContext);
  console.log('filterByNumericValues', filterByNumericValues)
  function handleColumnChange(event) {
    setColumn(event.target.value);
  }

  function handleComparisonChange(event) {
    setComparison(event.target.value);
  }

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  function showFilters(filters) {
    // console.log('showFilters', filters);
    const teste = filters.map((element) =>
      <div data-testid="filter">
        <button onClick={() => setRemoverFiltroDaTela(element.column)}>X</button>
        <p>{element.column} {element.comparison} {element.value}</p>
      </div>,
    );
    return teste;
  }

  /*
  {columns
    .filter((option) => !filters.map((filter) => filter.column).includes(option))
    .map((option) => <option value={option}>{option}</option>)
  }
  O primeiro map da função renderColumns faz a filtragem do state de
  filters(column: action.column, comparison: action.comparison, value: action.value),
  retirando somente column. O segundo filter retira
  de columns(array que foi declarado acima)a opção que incluso em currentFilterColumns e
  o terceiro map cria options para cada coluna restante
  */

  function rederSelects() {
    return (
      <div>
        <select
          data-testid="column-filter"
          value={column}
          onChange={handleColumnChange}
        >
          {columns
            .filter((option) => !filterByNumericValues.map((filter) => filter.column).includes(option))
            .map((option) => <option value={option}>{option}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={handleComparisonChange}
        >
          {options
            .filter((option) => !filterByNumericValues.map((filter) => filter.column).includes(option))
            .map((option) => <option value={option}>{option}</option>)}
        </select>
      </div>
    );
  }

  function handleSelectOrderColumn(event) {
    setSortColumn(event.target.value);
  }

  function handleSortChange(event) {
    setOrder(event.target.value);
  }

  function inputsRenderFiltersOrder() {
    return (
      <div>
        <label htmlFor="ASC">
          <input
            type="radio"
            id="ASC"
            value="ASC"
            data-testid="column-sort-input"
            checked={order === 'ASC'}
            onChange={handleSortChange}
          />ASC
        </label>
        <label htmlFor="DESC">
          <input
            type="radio"
            id="DESC"
            value="DESC"
            data-testid="column-sort-input"
            checked={order === 'DESC'}
            onChange={handleSortChange}
          />DESC
        </label>
      </div>
    );
  }

  function renderFiltrosValoresNum() {
    return (
      <div>
        {rederSelects()}
        <input type="number" data-testid="value-filter" onChange={handleValueChange} />
        <button
          data-testid="button-filter"
          onClick={
            () => setFilterByNumericValues([{
              column,
              comparison,
              value,
            }])}
        >Filtrar</button>
      </div>
    );
  }

  function renderFiltersOrder() {
    return (
      <div className="order">
        <p>Ordem</p>
        <select data-testid="column-sort" onChange={handleSelectOrderColumn}>
          {AllColumns.map((option) => <option value={option}>{option}</option>)}
        </select>
        {inputsRenderFiltersOrder()}
        <button
          data-testid="column-sort-button"
          onClick={() => setOrder(
            sortColumn,
            order,
          )}
        >Filtrar</button>
      </div>
    );
  }

  function renderProcurar() {
    return (
      <div>
        <label htmlFor="search">Procurar: </label>
        <input
          type="text"
          data-testid="name-filter"
          onChange={(event) => setFilterByName(event.target.value)}
        />
      </div>
    );
  }

  return (
    <div>
      {renderProcurar()}
      {renderFiltrosValoresNum()}
      {renderFiltersOrder()}
      <div>
        <p>Filtros {showFilters(filterByNumericValues)}</p>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   console.log('filterByNumericValues', state);
//   return {
//     data: state.planetsReducer.data,
//     filters: state.filters.filterByNumericValues,
//     stateToPropsSort: state.filters.sort,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   dispatchSearch: (name) => dispatch(filtrarPlanetsName(name)),
//   dispatchFilterValues: (
//     column,
//     comparison,
//     value,
//   ) => dispatch(filterValues(column, comparison, value)),
//   dispatchRemoverFiltroDaTela: (column) => dispatch(removerFiltroDaTela(column)),
//   dispatchOrdenarColumns: (column, sort) => dispatch(ordenarColumns(column, sort)),
// });

// FiltrosDaPagina.propTypes = {
//   dispatchSearch: PropTypes.func.isRequired,
//   dispatchFilterValues: PropTypes.func.isRequired,
//   filters: PropTypes.func.isRequired,
//   dispatchRemoverFiltroDaTela: PropTypes.func.isRequired,
//   dispatchOrdenarColumns: PropTypes.func.isRequired,
// };

export default FiltrosDaPagina;
