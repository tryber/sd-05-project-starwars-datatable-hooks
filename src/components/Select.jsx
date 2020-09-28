import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const Select = () => {
  const {
    setFilterByNumericValues, filterByNumericValues, column, setColumn, comparison, setComparison,
    value, setValue,
  } = useContext(StarWarsContext);
  const [columnFilter] = useState([
    '', 'rotation_period', 'orbital_period', 'diameter', 'surface_water', 'population',
  ]);
  const ComparisonFilter = (event) => {
    setComparison({ ...comparison, comparison: event.target.value });
  };
  const ValueFilter = (event) => {
    setValue({ ...value, value: event.target.value });
  };
  const HandleClick = () => {
    const filters = setFilterByNumericValues();
    filters({ column, comparison, value });
  };
  const filtered = filterByNumericValues;
  const columns = [...columnFilter];
  if (filtered.length > 0) {
    filtered.forEach((filter) => {
      columns.splice(columns.indexOf(filter.column), 1);
    });
  }
  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={(event) => setColumn({ ...column, column: event.target.value })}
      >
        {columns.map((value) => (<option key={value} value={value}>{value}</option>))}
      </select>
      <select data-testid="comparison-filter" onChange={ComparisonFilter}>
        <option value="comparison">comparison</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input data-testid="value-filter" type="number" onChange={ValueFilter} />
      <button data-testid="button-filter" onClick={HandleClick}>
        Filter
      </button>
    </div>
  );
};

export default Select;
