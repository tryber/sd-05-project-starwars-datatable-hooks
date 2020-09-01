import React from 'react';
import { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const FiltrosAtivos = () => {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(
    StarWarsContext,
  );

  const handleDelete = (index) => {
    const filterByNumericValuesWithOneLess = [
      ...filterByNumericValues.slice(0, index),
      ...filterByNumericValues.slice(index + 1, filterByNumericValues.length),
    ];
    setFilterByNumericValues(filterByNumericValuesWithOneLess);
  };

  return (
    <div>
      {filterByNumericValues.map((f, index) => (
        <div key={f.column + 1} data-testid="filter">
          <span>{f.column} </span>
          <span>{f.comparison} </span>
          <span>{f.value}</span>
          <button type="button" onClick={() => handleDelete(index)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default FiltrosAtivos;
