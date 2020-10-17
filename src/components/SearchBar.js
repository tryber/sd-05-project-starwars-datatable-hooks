import React, { useContext, useState } from 'react';
import SWContext from '../context/swContext';
import SortFilter from './SortFilter';

const colunas = [
  'selected',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparacoes = ['selected', 'maior que', 'menor que', 'igual a'];

function criaColunas(setColunm, filtrosUsados) {
  return (
    <select data-testid="column-filter" onChange={(event) => setColunm(event.target.value)}>
      {colunas
        .filter((coluna) => !filtrosUsados.includes(coluna))
        .map((coluna) => (
          <option key={coluna}>{coluna}</option>
        ))}
    </select>
  );
}

function DeletaFiltro(filterByNumericValues, column) {
  return filterByNumericValues.filter((filtro) => filtro.column !== column);
}

function SelectComparison(setComparison) {
  return (
    <select data-testid="comparison-filter" onChange={(event) => setComparison(event.target.value)}>
      {comparacoes.map((comparacao) => (
        <option key={comparacao}>{comparacao}</option>
      ))}
    </select>
  );
}

function SearchBar() {
  const { filterByNumericValues, setFilterByNumericValues, setFilterByName } = useContext(
    SWContext,
  );
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const filtrosUsados = filterByNumericValues.map((filtro1) => filtro1.column);
  return (
    <div>
      <input data-testid="name-filter" onChange={(event) => setFilterByName(event.target.value)} />
      {criaColunas(setColumn, filtrosUsados)}
      {SelectComparison(setComparison)}
      <input
        data-testid="value-filter"
        type="number"
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        data-testid="button-filter"
        onClick={() =>
          setFilterByNumericValues([...filterByNumericValues, { column, comparison, value }])
        }
      >
        BUSCAR
      </button>
      <div>
        {filterByNumericValues.map((filtro) => (
          <div data-testid="filter" key={filtro.column}>
            {`${filtro.column} ${filtro.comparison} ${filtro.value}`}
            <button
              onClick={() =>
                setFilterByNumericValues(DeletaFiltro(filterByNumericValues, filtro.column))
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div>
        <SortFilter />
      </div>
    </div>
  );
}

export default SearchBar;
