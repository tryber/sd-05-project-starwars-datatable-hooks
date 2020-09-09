import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const FilterPlanet = () => {
  const { setFilters } = useContext(StarWarsContext);

  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={(e) => setFilters({ filterByName: { name: e.target.value } })}
    />
  );
};

export default FilterPlanet;
