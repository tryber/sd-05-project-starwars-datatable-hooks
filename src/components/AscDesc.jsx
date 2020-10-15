import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const colunaInicial = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

function AscDesc() {
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('ASC');
  const { setReduxOrder } = useContext(StarWarsContext);
  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={(event) => setColumn({ column: event.target.value })}
      >
        {colunaInicial.map((event) => (
          <option value={event} key={event}>
            {event}
          </option>
        ))}
      </select>
      <input
        name="ordenar"
        value="ASC"
        type="radio"
        data-testid="column-sort-input"
        defaultChecked
        onChange={(event) => setSort({ sort: event.target.value })}
      />
      ASC
      <input
        name="ordenar"
        value="DESC"
        type="radio"
        data-testid="column-sort-input"
        onChange={(event) => setSort({ sort: event })}
      />
      DESC
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={() => setReduxOrder(sort, column)}
      >
        Selecionar
      </button>
    </div>
  );
}

export default AscDesc;
