import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import PropTypes from 'prop-types';
import COLUNAS from './colunas';


const FilterAsc = () => {
  const rCol = COLUNAS();

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
          { rCol.map((item) => <option key={item}>{item}</option>) };
        </select>
      </div>
      <label htmlFor="ASC">
        <input
          type="radio" id="ASC" value="ASC" data-testid="column-sort-input"
          onClick={handleChange}
        />
        ASC
      </label>
      <label htmlFor="DESC">
        <input
          type="radio" id="DESC" value="DESC" data-testid="column-sort-input"
          onClick={handleChange}
        />
        DSC
      </label>
      <button
        data-testid="column-sort-button"
        onClick={handleClick}
      >
        Filtrar
      </button>
    </div>
  );
}

FilterAsc.propTypes = {
  columnASC: PropTypes.string.isRequired,
  sortASC: PropTypes.string.isRequired,
  sortFilter: PropTypes.func.isRequired,
};

export default FilterAsc;
