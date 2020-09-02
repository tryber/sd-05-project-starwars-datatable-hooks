import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const columnOptions = [
  'selecione',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonOptions = ['selecione', 'maior que', 'menor que', 'igual a'];

const NumericFilter = () => {
  const [column, setColumn] = useState('');
  const [value, setValue] = useState('');
  const [comparison, setComparison] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { updateFilterByNumericValues } = useContext(StarWarsContext);
  return (
    <form>
      <select
        id="column-filter"
        data-testid="column-filter"
        onChange={(event) => setColumn(event.target.value)}
      >
        {columnOptions.map((option) =>
          (selectedOptions.includes(option) ? null : <option value={option}>{option}</option>),
        )}
      </select>

      <select
        id="comparison-filter"
        data-testid="comparison-filter"
        onChange={(event) => setComparison(event.target.value)}
      >
        {comparisonOptions.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>

      <input
        id="value-filter"
        type="number"
        data-testid="value-filter"
        onChange={(event) => setValue(event.target.value)}
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={() => {
          updateFilterByNumericValues(column, value, comparison);
          setSelectedOptions([...selectedOptions, column]);
        }}
      >
        Filtrar
      </button>
    </form>
  );
};

export default NumericFilter;
