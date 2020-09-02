import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../../context/starWarsContext';

export function datafilterfunction(filteredPlanets, filterByNumericValues) {
  let planets = filteredPlanets;
  for (let i = 0; i < filterByNumericValues.length; i += 1) {
    if (filterByNumericValues[i].comparison === 'maior que') {
      planets = planets.filter((planet) =>
        Number(planet[filterByNumericValues[i].column]) > Number(filterByNumericValues[i].value));
    } else if (filterByNumericValues[i].comparison === 'menor que') {
      planets = planets.filter((planet) =>
        Number(planet[filterByNumericValues[i].column]) < Number(filterByNumericValues[i].value));
    } else if (filterByNumericValues[i].comparison === 'igual a') {
      planets = planets.filter((planet) =>
        Number(planet[filterByNumericValues[i].column]) === Number(filterByNumericValues[i].value));
    }
  }
  return planets;
}

const Dropfilters = () => {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const { filterByNumericValues, setfilterByNumericValues } = useContext(StarWarsContext);

  const columnOptions = () => {
    const selectedFilterColumns = filterByNumericValues.map((filter) => filter.column);
    const startColumns = [
      'coluna',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    const columns = startColumns.filter((col) => !selectedFilterColumns.includes(col));
    return columns.map((coluna) => <option value={coluan} key={coluna}>{coluna}</option>);
  };

  const Scolumn = (event) => setColumn(event.target.value);
  const Scomp = (event) => setComparison(event.target.value);
  const Sval = (event) => setValue(event.target.value);

  return (
    <form>
      <label htmlFor="column"> Selecione a coluna:
        <select data-testid="column-filter" value={column} onChange={(event) => Scolumn(event)}>
          {columnOptions()}
        </select>
      </label>
      <label htmlFor="comparison"> Selecione a comparação:
        <select data-testid="comparison-filter" value={comparison} onChange={(e) => Scomp(e)}>
          <option>selecione:</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input type="number" data-testid="value-filter" onChange={(event) => Sval(event)} />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => { setfilterByNumericValues({ column, comparison, value }); }}
      >Filtrar</button></form>
  );
};

export default Dropfilters;
