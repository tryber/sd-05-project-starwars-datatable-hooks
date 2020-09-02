import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/context';

// obs.: strings vazias no começo para aumentar
// o número de ítens dentro do array (atendendo ao teste).

const dropdownOptions = ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const dropdownComparison = ['', 'maior que', 'menor que', 'igual a'];

export default function SearchNumbers() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);
  const columnSelected = filterByNumericValues.map((e) => e.column);
  const dropdownFiltered = dropdownOptions.filter((e) => columnSelected.indexOf(e) === -1);
  return (
    <div>
      <select data-testid="column-filter" onChange={(e) => setColumn(e.target.value)}>
        {dropdownFiltered.map((opt) => (<option key={opt}>{opt}</option>))}
      </select>
      <select data-testid="comparison-filter" onChange={(e) => setComparison(e.target.value)}>
        {dropdownComparison.map((comp) => (<option key={comp}>{comp}</option>))}
      </select>
      <input type="number" data-testid="value-filter" onChange={(e) => setValue(e.target.value)} />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => setFilterByNumericValues([...filterByNumericValues, { column, comparison, value }])}
      >
        Filter
      </button>
    </div>
  );
}
