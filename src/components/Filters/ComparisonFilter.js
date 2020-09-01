import React from 'react';

const ComparisonFilter = () => (
  <select data-testid="comparison-filter">
    <option value="">Comparação</option>
    <option value="maior que">maior que</option>
    <option value="igual a">igual a</option>
    <option value="menor que">menor que</option>
  </select>
);

export default ComparisonFilter;
