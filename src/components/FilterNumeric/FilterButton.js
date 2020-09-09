import React from 'react';
import { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

// Adiciona um novo filtro
const Button = () => {
  const { setNewFilter, columnFilter, comparisonFilter, valueFilter } = useContext(StarWarsContext);
  return (
    <button
      type="button"
      onClick={() => setNewFilter(columnFilter, comparisonFilter, valueFilter)}
      data-testid="button-filter"
    >
      Filter
    </button>
  );
};

export default Button;
