import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const rS = ['', 'population', 'rotation_period', 'diameter', 'surface_water', 'orbital_period'];

function selectComparison(setComparison) {
  return (
    <select
      onChange={(event) => setComparison(event.target.value)}
      data-testid="comparison-filter"
      name="comparison"
    >
      <option>Comparison</option>
      <option value="maior que">maior que</option>
      <option value="igual a">igual a</option>
      <option value="menor que">menor que</option>
    </select>
  );
}

function selectColumn(setColumn, colUsed) {
  return (
    <select
      onChange={(event) => setColumn(event.target.value)}
      data-testid="column-filter"
      name="column"
    >
      {rS
        .filter((coluna) => !colUsed.includes(coluna))
        .map((coluna) => (
          <option value={coluna} key={coluna}>
            {coluna}
          </option>
        ))}
    </select>
  );
}

function FiltroNumerico() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);
  const [colUsed, setUsed] = useState(filterByNumericValues.map((x) => x.column));
  useEffect(() => {
    setUsed(filterByNumericValues.map((x) => x.column));
  }, [filterByNumericValues]);
  return (
    <div>
      {selectColumn(setColumn, colUsed)}
      {selectComparison(setComparison)}
      <input
        onChange={(event) => setValue(event.target.value)}
        data-testid="value-filter"
        name="value"
      />
      <button
        data-testid="button-filter"
        onClick={() => {
          if (column === '' || comparison === '') return null;
          setFilterByNumericValues([...filterByNumericValues, { column, comparison, value }]);
          setColumn('');
          return null;
        }}
      >
        Submete
      </button>
      {filterByNumericValues.map((x) => (
        <div data-testid="filter">
          <button
            onClick={() =>
              setFilterByNumericValues(filterByNumericValues.filter((y) => y.column !== x.column))
            }
            id={x.column}
          >
            X
          </button>
          {x.column}
        </div>
      ))}
    </div>
  );
}

export default FiltroNumerico;
