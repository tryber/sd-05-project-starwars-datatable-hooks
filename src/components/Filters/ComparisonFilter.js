import React, { useContext } from 'react';
import SWContext from '../../context/SWContext';

const ComparisonFilter = () => {
  const { setComparisonFilter } = useContext(SWContext);
  return (
    <select
      onChange={({ target }) => setComparisonFilter(target.value)}
      data-testid="comparison-filter"
    >
      <option value="">Comparação</option>
      <option value="maior que">maior que</option>
      <option value="igual a">igual a</option>
      <option value="menor que">menor que</option>
    </select>
  );
};

export default ComparisonFilter;
