import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

// Add valor vazio - tamanho array
const itemsDropdown = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
const itemsComparison = ['', 'maior que', 'menor que', 'igual a'];
function NumberFilter() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  // const { handleChangeNumber, filterByNumericValues } = this.props;
  const columnUse = filterByNumericValues.map((e) => e.column);
  const columnAvailable = itemsDropdown.filter((e) => columnUse.indexOf(e) === -1);
  return (
    <div>
      <select data-testid="column-filter" onChange={(event) => setColumn(event.target.value)}>
        {columnAvailable.map((items) => (
          <option>{items}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={(event) => setComparison(event.target.value)}
      >
        {itemsComparison.map((items) => (
          <option>{items}</option>
        ))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        data-testid="button-filter" onClick={() => setFilterByNumericValues(
          [...filterByNumericValues, { column, comparison, value }])}
      >
        Filter
      </button>
    </div>
  );
}

export default NumberFilter;
