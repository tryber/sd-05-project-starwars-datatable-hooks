import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const ColumnFilter = () => {
  const { columns, setColumnFilter, numericFilter } = useContext(StarWarsContext);
  let newOptions = columns;
  numericFilter.forEach((filter) => {
    newOptions = newOptions.filter((opt) => filter.column !== opt);
  });

  return (
    <select onChange={({ target }) => setColumnFilter(target.value)} data-testid="column-filter">
      {newOptions.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ColumnFilter;
