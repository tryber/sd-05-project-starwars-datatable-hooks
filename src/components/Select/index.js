import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const Select = () => {

  const columnsOptions = [
    'selecione',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [filter, setFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);


  const filtered = filterByNumericValues.map((filter) => {
    if (filter.column) {
      return filter.column;
    }
    return null;
  });
  

  // https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
  const filteredColumns = columnsOptions.filter ((item) => !filtered.includes(item));
  const optionsValues = ['selecione', 'maior que', 'menor que', 'igual a'];

  return (
    <div>
      <select data-testid="column-filter" name="column" onChange={(e) => setFilter({ ...filter, column: e.target.value })}>
        {filteredColumns.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      <select data-testid="comparison-filter" name="comparison" onChange={(e) => setFilter({ ...filter, comparison: e.target.value })}>
        {optionsValues.map((values) =>
          <option key={values} value={values}>{values}</option>,
        )}
      </select>
      <input type="number" data-testid="value-filter" name="value" onChange={(e) => setFilter({ ...filter, value: e.target.value })} />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => setFilterByNumericValues([filter])}
      >
        Buscar
      </button>
      {filter.map((list) =>
        <span key={Math.random(9999999)} data-testid="filter">{`filtrado por: ${list.column} ${list.comparison} ${list.value}`} <button name={list.column} type="button" onClick={this.handleClick}>X</button> </span>,
      )}
    </div>
  );
}

export default Select;
