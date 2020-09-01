import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const columnOptions = ['', 'name', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function OrderTable() {
  const { setOrder } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('');

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'column') {
      setColumn(value);
    } else {
      setSort(value);
    }
  };

  const handleClick = () => {
    setOrder({ column, sort });
  };

  return (
    <div>
      <select name="column" onChange={handleChange} value={column} data-testid="column-sort">
        {columnOptions.map((e) => <option key={e} value={e}>{e}</option>)}
      </select>
      <div>
        <label htmlFor="ASC">
          ASC
          <input
            data-testid="column-sort-input-asc" type="radio" id="ASC"
            name="sort" value="ASC" onClick={handleChange}
          />
        </label>
        <label htmlFor="DESC">
          DESC
          <input
            data-testid="column-sort-input-desc" type="radio" id="DESC"
            name="sort" value="DESC" onClick={handleChange}
          />
        </label>
        <button
          type="button" data-testid="column-sort-button" onClick={handleClick}
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default OrderTable;
