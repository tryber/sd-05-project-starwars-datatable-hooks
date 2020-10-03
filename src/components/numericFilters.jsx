import React from 'react';
import { useContext, useState } from 'react';
import Context from '../context/StarWarsContext';

function selectButton(options, filtros, setColumn, setComparison) {
  return (
    <div>
      <select data-testid="column-filter" onChange={(event) => setColumn(event.target.value)}>
        <option value="" disabled defaultValue />
        {options
          .filter((el) => !filtros.includes(el))
          .map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={(event) => setComparison(event.target.value)}
      >
        <option value="">Choose your comparison</option>
        <option value="menor que">menor que</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
      </select>
    </div>
  );
}

const NumericFilter = () => {
  const { numericFunction, removeFilter, selectedOption: options,
    filterByNumericValues,
  } = useContext(Context);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [valor, setValor] = useState('');
  const filtros = filterByNumericValues.map((el) => el.column);
  return (
    <div>
      {selectButton(options, filtros, setColumn, setComparison)}
      <input
        type="number"
        data-testid="value-filter"
        onChange={(event) => setValor(event.target.value)}
      />
      <button
        data-testid="button-filter"
        onClick={() => numericFunction({ column, comparison, value: valor })}
      >
        Acionar
      </button>
      <div>
        {filtros.map((filtro) => (
          <div data-testid="filter" key={filtro}>
            <button onClick={(event) => removeFilter(event.target.id)} id={filtro}>
              X
            </button>
            {filtro}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumericFilter;
