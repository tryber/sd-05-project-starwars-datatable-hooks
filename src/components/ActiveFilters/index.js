import React from 'react';
import { useContext } from 'react';
import SWContext from '../../context/SWContext';

const ActiveFilters = () => {
  const { numericFilter, removeNumericFilter } = useContext(SWContext);
  return (
    <div>
      {numericFilter.map((filter) => (
        <div className="activeFilter" data-testid="filter" key={filter.column}>
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          <button type="button" onClick={() => removeNumericFilter(filter.column)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default ActiveFilters;
