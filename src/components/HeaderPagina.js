import React, { useContext } from 'react';
import SWContext from '../context/StarWarsContext';

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

function showFilters(filterByNumericValues, setFilterByNumericValues) {
  const teste = filterByNumericValues.map((element) =>
    <div data-testid="filter">
      <button
        onClick={() => {
          setFilterByNumericValues(filterByNumericValues.filter((filter) =>
            filter.column !== element.column),
          );
        }}
      >X</button>
      <p>{element.column} {element.comparison} {element.value}</p>
    </div>,
  );
  return teste;
}

function rederSelects(column, handleColumnChange, filterByNumericValues, handleComparisonChange) {
  return (
    <div>
      <select
        data-testid="column-filter"
        value={column}
        onChange={handleColumnChange}
      >
        {columns
          .filter((option) =>
            !filterByNumericValues.map((filter) => filter.column).includes(option))
          .map((option) => <option value={option}>{option}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={handleComparisonChange}
      >
        {options
          .filter((option) =>
            !filterByNumericValues.map((filter) => filter.column).includes(option))
          .map((option) => <option value={option}>{option}</option>)}
      </select>
    </div>
  );
}

function inputsRenderFiltersOrder(sortOrder, handleSortChange) {
  return (
    <div>
      <label htmlFor="ASC">
        <input
          type="radio"
          id="ASC"
          value="ASC"
          data-testid="column-sort-input-asc"
          checked={sortOrder === 'ASC'}
          onChange={handleSortChange}
        />ASC
      </label>

      <label htmlFor="DESC">
        <input
          type="radio"
          id="DESC"
          value="DESC"
          data-testid="column-sort-input-desc"
          checked={sortOrder === 'DESC'}
          onChange={handleSortChange}
        />DESC
      </label>
    </div>
  );
}

function renderProcurar(setFilterByName) {
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

function renderFiltersOrder(
  handleSelectOrderColumn,
  sortColumn,
  sortOrder,
  handleSortChange,
  setOrder,
) {
  return (
    <div className="order">
      <p>Ordem</p>
      <select data-testid="column-sort" onChange={handleSelectOrderColumn}>
        {AllColumns.map((option) => <option value={option}>{option}</option>)}
      </select>
      {inputsRenderFiltersOrder(sortOrder, handleSortChange)}
      <button
        data-testid="column-sort-button"
        onClick={() => {
          setOrder({
            column: sortColumn,
            order: sortOrder,
          });
        }}
      >Filtrar</button>
    </div>
  );
}

function addFilter(filter, filterByNumericValues) {
  const filters = [...filterByNumericValues];
  filters.push(filter);
  return filters;
}

function renderFiltrosValoresNum(handleColumnChange, handleComparisonChange, handleValueChange) {
  const {
    column,
    filterByNumericValues,
    comparison,
    value,
    setFilterByNumericValues,
  } = useContext(SWContext);
  return (
    <div>
      {rederSelects(column, handleColumnChange, filterByNumericValues, handleComparisonChange)}
      <input type="number" data-testid="value-filter" onChange={handleValueChange} />
      <button
        data-testid="button-filter"
        onClick={
          () => setFilterByNumericValues(addFilter({
            column,
            comparison,
            value,
          }, filterByNumericValues))}
      >Filtrar</button>
    </div>
  );
}

function FiltrosDaPagina() {
  const {
    setComparison,
    setColumn,
    setValue,
    filterByNumericValues,
    setFilterByNumericValues,
    setFilterByName,
    setOrder,
    sortColumn,
    setSortColumn,
    sortOrder,
    setSortOrder,
  } = useContext(SWContext);
  function handleColumnChange(event) {
    setColumn(event.target.value);
  }
  function handleComparisonChange(event) {
    setComparison(event.target.value);
  }
  function handleValueChange(event) {
    setValue(event.target.value);
  }
  function handleSelectOrderColumn(event) {
    setSortColumn(event.target.value);
  }
  function handleSortChange(event) {
    setSortOrder(event.target.value);
  }
  return (
    <div>
      {renderProcurar(setFilterByName)}
      {renderFiltrosValoresNum(handleColumnChange, handleComparisonChange, handleValueChange)}
      {renderFiltersOrder(
        handleSelectOrderColumn,
        sortColumn, sortOrder,
        handleSortChange,
        setOrder,
      )}
      <p>Filtros {showFilters(filterByNumericValues, setFilterByNumericValues)}</p>
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
