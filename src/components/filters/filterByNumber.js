import React, { useState, useContext } from 'react';
import MyContext from '../../context/context';

function FilterByNumeric() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(MyContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const comparisonArray = [[], 'maior que', 'igual a', 'menor que'];
  const columnArray = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const renderSelect = (array) => (array.map((opt) => <option key={opt}>{opt}</option>));

  const selectedColumns = filterByNumericValues.map((opt) => opt.column);
  const availableColumns = columnArray.filter((filt) => !selectedColumns.includes(filt));

  return (
    <div>
      <select id="column" data-testid="column-filter" onChange={(e) => setColumn(e.target.value)}>
        <option>Coluna</option>
        {renderSelect(availableColumns)}
      </select>
      <select
        id="comparison"
        data-testid="comparison-filter"
        onChange={(e) => setComparison(e.target.value)}
      >
        {renderSelect(comparisonArray)}
      </select>
      <label htmlFor="value">
        <input
          id="value"
          data-testid="value-filter"
          type="number"
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => setFilterByNumericValues([...filterByNumericValues, {
          column,
          comparison,
          value,
        }])
        }>
        Filtrar
        </button>
    </div>
  );
}

export default FilterByNumeric;
