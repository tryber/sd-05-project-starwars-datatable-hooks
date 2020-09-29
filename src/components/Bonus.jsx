import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const columnArray = [
  'Name', 'rotation_period',
  'orbital_period', 'diameter',
  'climate', 'gravity',
  'terrain', 'surface_water',
  'population', 'films',
  'created', 'edited',
  'url',
];

const Order = () => {
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('');
  const { setOrder } = useContext(StarWarsContext);

  const ColumnFunc = (event) => setColumn(event.target.value);
  return (
    <div>
      <select data-testid="column-sort" onChange={ColumnFunc}>
        {columnArray.map((value) => (<option key={value} value={value}>{value}</option>))}
      </select>
      <span>
        {' '}
        ASC
        <input
          data-testid="column-sort-input-asc" type="radio"
          value="ASC" name="sort" onClick={(event) => setSort(event.target.value)}
        />
      </span>
      <span>
        {' '}
        DESC
        <input
          data-testid="column-sort-input-desc" type="radio"
          value="DESC" name="sort" onClick={(event) => setSort(event.target.value)}
        />
      </span>
      <button
        data-testid="column-sort-button"
        onClick={() => console.log(setOrder({ column, sort }))}
      >
        Filter
      </button>
    </div>
  );
};

export default Order;
