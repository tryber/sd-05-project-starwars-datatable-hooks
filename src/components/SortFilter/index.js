import React from 'react';
import Input from './Input';
import { useContext } from 'react';
import SWContext from '../../context/SWContext';

const SortFilter = () => {
  const { columns, sortValue, setColumnValue, columnValue, setSort } = useContext(SWContext);
  return (
    <div>
      <select data-testid="column-sort" onChange={({ target }) => setColumnValue(target.value)}>
        {columns.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="ASC">ASC</label>
      <Input>ASC</Input>
      <label htmlFor="DESC">DESC</label>
      <Input id={'column-sort-input-desc'}>
        DESC
      </Input>
      <button
        data-testid="column-sort-button"
        onClick={() => setSort({columnValue, sortValue})}
        type="button"
      >
        Sort
      </button>
    </div>
  );
};

export default SortFilter;
