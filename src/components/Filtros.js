import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filtros() {
  const { filterByNumericValues, setFiltros } = useContext(StarWarsContext);
  return (
    <div>
      <h4>Filtros</h4>
      {filterByNumericValues.map((filtro) => (
          <div key={filtro.column} data-testid="filter">
            <span>{filtro.column}</span>
            <span>{filtro.comparison}</span>
            <span>{filtro.value}</span>
            <button
              name={filtro.column}
              type="button"
              onClick={(event) => {
                setFiltros(filterByNumericValues.filter((filtro) => filtro.column !== event.target.name));
              }}
            >
              X
            </button>
          </div>
        ))}
    </div>
  );
}
