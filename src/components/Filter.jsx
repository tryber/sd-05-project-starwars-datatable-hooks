import React, { Fragment } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import FilterInput from './FilterInput';
import { StarWarsContext } from '../context/StarWarsContext';
import SelectComparison from './SelectComparison';
import BtnToSubmit from './BtnToSubmit';

const filtrosColuna = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const Filter = () => {
  const [filter, setFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  // const [comparisonFilter, setcomparisonFilter] = useState('');
  // const [numberFilter, setnumberFilter] = useState('');
  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);

  const filtrosAtivos = filterByNumericValues.map((f) => {
    if (f.column) {
      return f.column;
    }
    return null;
  });

  // https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
  const filtrosFiltrados = filtrosColuna.filter(
    (x) => !filtrosAtivos.includes(x),
  );

  return (
    <Fragment>
      <FilterInput />
      <form>
        <select
          data-testid="column-filter"
          onChange={(e) => setFilter({ ...filter, column: e.target.value })}
        >
          <option>Coluna</option>
          {filtrosFiltrados.map((filtro) => (
            <option key={filtro} value={filtro}>
              {filtro}
            </option>
          ))}
        </select>
        <SelectComparison change={(e) => setFilter({ ...filter, comparison: e.target.value })} />
        {/* input do number */}
        <input
          type="number"
          data-testid="value-filter"
          onChange={(e) => setFilter({ ...filter, value: e.target.value })}
        />
        <BtnToSubmit click={() => setFilterByNumericValues([filter])} />
      </form>
    </Fragment>
  );
};

export default Filter;
