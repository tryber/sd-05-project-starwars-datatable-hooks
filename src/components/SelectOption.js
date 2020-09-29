import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const col = [
  '',
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

function SelectOption() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);

  const { filterByNumericValues, byNumericValuesFunction } = useContext(
    StarWarsContext,
  );

  function hC() {
    if (column && comparison) {
      byNumericValuesFunction({ column, comparison, value });
      setColumn('');
      setValue(0);
    }
  }

  // prettier-ignore
  const colunas = [...col];
  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((filt) => {
      colunas.splice(colunas.indexOf(filt.column), 1);
    });
  }
  return (
    <div>
      <select
        onChange={(event) => setColumn(event.target.value)} data-testid="column-filter"
      >
        {colunas.map((param) => ( //'value' is already declared in the upper scope.
          <option key={param} value={param}>{param}</option>
        ))}
      </select>
      <select
        onChange={(event) => setComparison(event.target.value)} data-testid="comparison-filter"
      >
        <option value="" />
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter" type="number" onChange={(event) => setValue(event.target.value)}
      />
      <button data-testid="button-filter" onClick={() => hC()}>
        CLIQUE AQUI
      </button>
    </div>
  );
}

export default SelectOption;
