import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const FilterPlanet = () => {
  const { setFilterByName } = useContext(StarWarsContext);

  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={(e) => setFilterByName(e.target.value)}
    />
  );
};

export default FilterPlanet;
