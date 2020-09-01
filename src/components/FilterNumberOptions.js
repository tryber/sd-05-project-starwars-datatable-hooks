import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function FilterNumberOptions() {
  const { setFilterByNumericValues, filterByNumericValues } = useContext(StarWarsContext);
  const handleClick = (column) => {
    const removed = filterByNumericValues.filter((e) => e.column !== column);
    setFilterByNumericValues(removed);
  };

  return (
    <div>
      {filterByNumericValues.map((e) => (
        <div key={e.column} data-testid="filter">
          <div>{e.column}</div>
          <div>{e.comparison}</div>
          <div>{e.value}</div>
          <button
            type="button"
            onClick={() => handleClick(e.column)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default FilterNumberOptions;
