import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { setFilterByName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="name-filter">
        <span>Filtre Aqui: </span>
        <input
          placeholder="DIGITE AQUI"
          type="text"
          data-testid="name-filter"
          onChange={(e) => setFilterByName(e.target.value)}
        />
      </label>
    </div>
  );
}

export default Filter;
