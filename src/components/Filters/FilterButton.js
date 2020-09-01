import React from 'react';
import { useContext } from 'react';
import SWContext from '../../context/SWContext';

const Button = () => {
  const { addNewFilter, columnFilter, comparisonFilter, valueFilter } = useContext(SWContext);
  return (
    <button
      type="button"
      onClick={() => addNewFilter(columnFilter, comparisonFilter, valueFilter)}
      data-testid="button-filter"
    >
      Filter
    </button>
  );
};

export default Button;
