import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { InputColumn, InputComparison, InputValue } from '.';
import '../layouts/StarWars.css';

export default function Compare() {
  const { filterValues } = useContext(StarWarsContext);
  return (
    <div className="filter">
      <InputColumn />
      <InputComparison />
      <InputValue />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => filterValues()}
      >
        Filtrar
      </button>
    </div>
  );
}
