import React from 'react';
import Context from '../context/StarWarsContext';
import { ordenaFiltro } from '../actions';
import { useContext, useState } from 'react';

const arrayCabecalho = [
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

const Bonus = () => {
  const { setOrder } = useContext(Context);
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('');
  return (
    <div>
      <select data-testid="column-sort" onChange={(e) => setColumn(e.target.value)}>
        {arrayCabecalho.map((titulo) => (
          <option value={titulo} key={titulo}>
            {titulo}
          </option>
        ))}
      </select>
      <input
        type="radio"
        data-testid="column-sort-input-asc"
        name="sort"
        value="ASC"
        onClick={(e) => setSort(e.target.value)}
      />{' '}
      ASC
      <input
        type="radio"
        data-testid="column-sort-input-desc"
        name="sort"
        value="DESC"
        onClick={(e) => setSort(e.target.value)}
      />{' '}
      DESC
      <button data-testid="column-sort-button" onClick={() => setOrder({ column, sort })}>
        Filtrar
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ordem: (event) => dispatch(ordenaFiltro(event)),
});

export default Bonus;
