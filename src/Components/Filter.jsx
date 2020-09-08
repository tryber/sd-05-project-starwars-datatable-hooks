import React, { useContext } from 'react';
import { SWContext } from '../context';
import './Filter.css';

const Filter = () => {
  const { filteringByName } = useContext(SWContext);
  return (
    <div className="filter-container">
      <label htmlFor="filterText" className="filter-label">
        <span className="filter-label-text">Procurar</span>
        <input
          className="filter-input"
          type="text"
          name="filterText"
          data-testid="name-filter"
          onChange={({ target }) => filteringByName(target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;
