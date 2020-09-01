import React, { useContext } from 'react';
import { PlanetContext } from './planetsContext';

function SearchBar() {
  const { filterByName } = useContext(PlanetContext);
  return (
    <div>
      Procurar:
      <input
        type="text"
        onChange={(e) => filterByName(e)}
        data-testid="name-filter"
      />
    </div>
  );
}

export default SearchBar;
