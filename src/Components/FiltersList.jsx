import React from 'react';
import ListFilterItems from './ListFilterItems';

const FiltersList = () => {
  return (
    <div className="filters-list-container">
      <h2 className="filters-list-title">Filtros Ativos</h2>
      <ul className="unordered-list-filter">
        <ListFilterItems />
      </ul>
    </div>
  );
};

export default FiltersList;
