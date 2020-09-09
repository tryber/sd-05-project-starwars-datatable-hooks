import React from 'react';
import { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const Button = () => {
  const { addNewFilter, columnFilter, comparisonFilter, valueFilter } = useContext(StarWarsContext);
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
