import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Remove() {
  const { filters, deleteFilter } = useContext(StarWarsContext);
  const removeFilter = (selected) => deleteFilter(selected);
  return filters.filterByNumericValues.map((filtered) => (
    <div data-testid="filter" key={filtered.column}>
      <span>{`${filtered.column} - ${filtered.comparison} - ${filtered.value}`}</span>
      <button onClick={() => removeFilter(filtered)}>x</button>
    </div>
  ));
}
