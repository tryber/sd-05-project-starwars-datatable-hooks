import React, { useContext } from 'react';

import { StarWarsContext } from '../context/StarWarsContextProvider';

function NameFilter() {
  const { setNameFilter } = useContext(StarWarsContext);

  return (
    <section>
      <input
        data-testid="name-filter"
        type="text"
        name="filter-name"
        onChange={(event) => setNameFilter(event.target.value)}
        placeholder="Search planet by name"
      />
    </section>
  );
}

function ValueFilter() {
  const { numericValue, setColumn, setComparison, setValue } = useContext(StarWarsContext);

  // https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
  const columnOptions = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']
  .filter((option) => !numericValue.map((filter) => filter.column)
  .includes(option));

  return (
    <section>
      <select data-testid="column-filter" onChange={(event) => setColumn(event.target.value)}>
        <option hidden disabled selected value> -- select an option -- </option>
        {columnOptions.map((options) => <option key={options} value={options}>{options}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={(event) => setComparison(event.target.value)}
      >
        <option hidden disabled selected value> -- select an option -- </option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        data-testid="value-filter" type="number"
        onChange={(event) => setValue(event.target.value)}
      />
    </section>
  );
}

function Filters() {
  return (
    <section>
      <NameFilter />
      <ValueFilter />
    </section>
  );
}

export default Filters;
