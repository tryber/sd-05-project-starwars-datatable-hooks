import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const opcoes = ['maior que', 'menor que', 'igual a', 'Selecionar'];

const menu = [
  'Coluna',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Select() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const allColumn = filters.filterByNumericValues.map((filter) => filter.column);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  return (
    <div>
      <select data-testid="column-filter" onChange={(event) => setColumn(event.target.value)}>
        {menu
          .filter((escolha) => !allColumn.includes(escolha))
          .map((escolha) => (
            <option key={escolha} value={escolha}>
              {escolha}
            </option>
          ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={(event) => setComparison(event.target.value)}
      >
        <option defaultValue>Selecionar</option>
        {opcoes.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => setFilters({ column, comparison, value })}
      >
        Filtrar
      </button>
    </div>
  );
}

export default Select;
