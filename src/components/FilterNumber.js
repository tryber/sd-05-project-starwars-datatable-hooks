import React, {useContext, useState, useEffect} from 'react';

import StarWarsContext from '../context/StarWarsContext';

function FilterNumber() {

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);

  const handleChange = (e) => {
    if (e.target.name === 'column') {
      setColumn(e.target.value);
    }
    if (e.target.name === 'comparison') {
      setComparison(e.target.value);
    }
    if (e.target.name === 'value') {
      setValue(e.target.value);
    }
    // this.setState({ [e.target.name]: e.target.value });
  }

  const handleClick = () => {
    setFilterByNumericValues([ ...filterByNumericValues, { column, comparison, value } ]);
  }

  const columnOptions = ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const usedColumns = filterByNumericValues.map((e) => e.column);
  const availableColumns = columnOptions.filter((e) => usedColumns.indexOf(e) === -1);
  return (
    <div>
      <select name="column" onChange={handleChange} value={column} data-testid="column-filter">
        {availableColumns.map((e) => <option key={e} value={e}>{e}</option>)}
      </select>
      <div>
        <select onChange={handleChange} name="comparison" data-testid="comparison-filter">
          <option />
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input onChange={handleChange} name="value" value={value} data-testid="value-filter" type="number" />
        <button
          type="button" data-testid="button-filter" onClick={handleClick}
        >
          Filtrar
        </button>
      </div>
    </div>
  );

}

export default FilterNumber;
