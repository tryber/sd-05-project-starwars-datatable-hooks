import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Order() {
  const [column, setColumn] = useState('Name');
  const [sort, setSort] = useState('ASC');

  const handleOnChangeColumn = (event) => {
    let { value } = event.target;
    //  manobra técnica para o Name que está diferente nos testes:
    if (value === 'name') value = 'Name';
    setColumn(value);
  }

  const handleOnChangeRadio = (event) => {
    const { value } = event.target;
    setSort(value);
  }

  const handleOnClick = () => {
    setFilterSortedColumn({column});
    setFilterSortedOrder({sort});
  }

    const { data, setFilterSortedColumn, setFilterSortedOrder } = useContext(StarWarsContext);
    let options = [];
    if (data.length > 0) {
      options = Object.keys(data[0]);
      options.pop();
    }

    return (
      <div>
        <h4>Ordem</h4>
        <select data-testid="column-sort" onChange={handleOnChangeColumn}>
          {options.map((item) => (<option key={item} value={item}>{item}</option>))}
        </select>
        <input type="radio" id="teste" name="radiocheck" onChange={handleOnChangeRadio} checked={sort === 'ASC'} value="ASC" data-testid='column-sort-input-asc' />
        <label htmlFor="teste">ASC</label>
        <input type="radio" id="teste1" name="radiocheck" onChange={handleOnChangeRadio} checked={sort === 'DESC'} value="DESC" data-testid="column-sort-input-desc" />
        <label htmlFor="teste1">DESC</label>
        <button data-testid="column-sort-button" onClick={handleOnClick}>Filtrar</button>
      </div>
    );
}

export default Order;
