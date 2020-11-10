// useState retorna o valor inicial e o setState re-renderiza para novo valor
// useContext será atualizado sempre que for renderizado novamento e o valor contexto alterado
import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const colunas = [
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

function Order() {
  const { orderContext } = useContext(StarWarsContext);

  const [column, setColumn] = useState('Name');
  const [order, setOrder] = useState('ASC');

  return (
    <div>
      <label htmlFor="ASC">
        ASC
        <input
          name="order"
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          defaultChecked
          onChange={(event) => setOrder(event.target.value)}
        />
      </label>
      <label htmlFor="DESC">
        DESC
        <input
          name="order"
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={(event) => setOrder(event.target.value)}
        />
      </label>
      <select data-testid="column-sort" onChange={(event) => setColumn(event.target.value)}>
        {colunas.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={() => orderContext(column, order)}
      >
        Filtrar
      </button>
    </div>
  );
}

export default Order;
