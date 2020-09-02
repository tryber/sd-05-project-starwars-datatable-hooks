import React, { useContext } from 'react';
import { PlanetContext } from './planetsContext';

const columns = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
const comp = ['', 'maior que', 'menor que', 'igual a'];

function SearchBar() {
  const { filterByName, filterByNumeric,
    setColumn, setComparison, setValue } = useContext(PlanetContext);
  const compDone = (e) => {
    const valueEvent = e.target.value;
    const valueName = e.target.name;
    if (valueName === 'column') {
      setColumn(valueEvent);
    } else if (valueName === 'comparison') {
      setComparison(valueEvent);
    } else {
      setValue(valueEvent);
    }
  };
  return (
    <div>
      Procurar:
      <input
        type="text"
        onChange={(e) => filterByName(e)}
        data-testid="name-filter"
      />
      <select
        data-testid="column-filter"
        name="column"
        onChange={(e) => compDone(e)}
      >
        {columns.map((item) => (<option>{item}</option>))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={(e) => compDone(e)}
      >
        {comp.map((item) => (<option>{item}</option>))}
      </select>
      <input
        type="number" data-testid="value-filter"
        name="value"
        onChange={(e) => compDone(e)}
      />
      <button
        data-testid="button-filter"
        onClick={() => filterByNumeric()}
      > Filtrar </button> </div>);
}

export default SearchBar;
