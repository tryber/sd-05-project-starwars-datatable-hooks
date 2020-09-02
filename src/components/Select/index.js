import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const columnsOptions = ['selecione', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const Select = () => {
  const { filterByNumericValues, SetFilterByNumericValues } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  console.log(column, comparison, value);

  const handleClick = (columns) => {
    const newFilter = filterByNumericValues.filter((e) => e.column !== columns);
    SetFilterByNumericValues(newFilter);
  };

  const filtered = filterByNumericValues.map((fil) => {
    if (fil.column) return fil.column;
    return null;
  });

  // https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
  const filteredColumns = columnsOptions.filter((item) => !filtered.includes(item));
  const optionsValues = ['selecione', 'maior que', 'menor que', 'igual a'];
  return (
    <div>
      <select
        data-testid="column-filter" name="column" onChange={(e) => setColumn(e.target.value)}
      >
        {filteredColumns.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison" onChange={(e) => setComparison(e.target.value)}
      >
        {optionsValues.map((values) =>
          <option key={values} value={values}>{values}</option>,
        )}
      </select>
      <input
        type="number" data-testid="value-filter"
        name="value" onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button" data-testid="button-filter" onClick={() =>
          SetFilterByNumericValues([...filterByNumericValues, { column, comparison, value }])}
      >
        Buscar
      </button>
      {filterByNumericValues.map((list) =>
        <span key={Math.random(9999999)} data-testid="filter">{`filtrado por: ${list.column} ${list.comparison} ${list.value}`} <button name={list.column} type="button" onClick={() => handleClick(list.column)}>X</button> </span>,
      )}
    </div>
  );
};

export default Select;
