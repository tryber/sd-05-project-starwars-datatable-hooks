import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const options = ['', 'name', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const Radio = () => {
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('');
  const { setOrder } = useContext(StarWarsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

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
      <div>
        <select name="column" value={column} onChange={handleChange} data-testid="column-sort">
          { options.map((item) => <option key={item}>{item}</option>) };
        </select>
      </div>
      <input
        type="radio" data-testid="column-sort-input-asc" name="sort" value="ASC"
        id="ASC" onClick={handleChange}
      />
      <label htmlFor="ASC">ASC</label>
      <input
        type="radio" data-testid="column-sort-input-desc" name="sort" value="DESC"
        id="DESC" onClick={handleChange}
      />
      <label htmlFor="DESC">DESC</label>
      <button type="button" onClick={handleClick} data-testid="column-sort-button">
        Filtrar
      </button>
    </div>
  );
};


export default Radio;
