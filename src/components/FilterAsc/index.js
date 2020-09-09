import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const SortFilter = () => {
  const {
    columns,
    sortValue,
    setSortValue,
    setColumnValue,
    columnValue,
    setSort,
  } = useContext(StarWarsContext);

  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={(e) => setColumnValue(e.target.value)}
      >
        {columns.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="ASC">ASC</label>
      <input
        data-testid="Column-sort-button" onClick={() => setSortValue('ASC')}
        name="sort" id="ASC" type="radio" value="ASC"
      />
      <label htmlFor="DESC">DESC</label>
      <input
        data-testid="Column-sort-button" onClick={() => setSortValue('DESC')}
        name="sort" id="DESC" type="radio" value="DESC"
      />
      <button
        data-testid="column-sort-button"
        onClick={() => setSort({ columnValue, sortValue })}
        type="button"
      >
        Sort
      </button>
    </div>
  );
};

export default SortFilter;
