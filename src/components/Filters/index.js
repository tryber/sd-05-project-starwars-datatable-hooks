import React from 'react';
import ColumnFilter from './ColumnFilter';
import ComparisonFilter from './ComparisonFilter';
import ValueFilter from './ValueFilter';
import FilterButton from './FilterButton';

const Filters = () => {
  return (
    <div>
      <ColumnFilter />
      <ComparisonFilter />
      <ValueFilter />
      <FilterButton />
    </div>
  );
};

export default Filters;
