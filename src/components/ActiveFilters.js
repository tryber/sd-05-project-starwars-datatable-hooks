import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const ActiveFilters = () => {
  const { selectedOptions, removeFilter, removeSelectedOption } = useContext(StarWarsContext);

  return (
    <div>
      {selectedOptions.map((filter) => (
        <div data-testid="filter">
          <p>
            {filter.column} {filter.comparison} {filter.value}
          </p>
          <button
            onClick={() => {
              removeFilter(filter.column);
              removeSelectedOption(filter.column);
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default ActiveFilters;
