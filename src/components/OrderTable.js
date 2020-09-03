// Referência: https://www.w3schools.com/tags/att_input_type_radio.asp

import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const ordinalColumns = [
  'selecione',
  'name',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const OrderTable = () => {
  const { updateOrder } = useContext(StarWarsContext);
  const [sort, setSort] = useState('');
  const [chooseColumn, setChooseColumn] = useState('');
  return (
    <form>
      <select data-testid="column-sort" onChange={(event) => setChooseColumn(event.target.value)}>
        {ordinalColumns.map((column) => (
          <option value={column}>{column}</option>
        ))}
      </select>
      <label htmlFor="ASC">ASC</label>
      <input
        id="ASC"
        data-testid="column-sort-input-asc"
        type="radio"
        value="ASC"
        name="order"
        onClick={(event) => setSort(event.target.value)}
      />
      <label htmlFor="DES">DESC</label>
      <input
        id="DESC"
        data-testid="column-sort-input-desc"
        type="radio"
        value="DESC"
        name="order"
        onClick={(event) => setSort(event.target.value)}
      />
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={() => updateOrder(sort, chooseColumn)}
      >
        Ordenar
      </button>
    </form>
  );
};

export default OrderTable;
