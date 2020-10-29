import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filters, remover } = useContext(StarWarsContext);
  const todosFiltros = filters.filterByNumericValues;
  return (
    <div>
      {todosFiltros.map((filter) => (
        <span data-testid="filter" key={filter.value}>
          <p>{`${filter.column} ${filter.comparison} ${filter.value}`}</p>
          <button type="button" onClick={() => remover(filter)}>
            X
          </button>
        </span>
      ))}
    </div>
  );
}

export default Filters;
