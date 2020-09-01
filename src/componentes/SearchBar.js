import React, { useContext } from 'react';
import StarWarsContext from '../context/context';

const SearchBar = () => {
  const { setName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="input-name-filter">
        Search for a planet by its name:
          <input
          data-testid="name-filter"
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
    </div>
  );
}

export default SearchBar;
