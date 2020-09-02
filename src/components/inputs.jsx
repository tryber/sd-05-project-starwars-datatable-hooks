import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import SelectInputs from './selectinputs';

function SearchBar() {
  const { setText } = useContext(StarWarsContext);
  return (
    <form>
      <label htmlFor="searchbar">Procurar planeta</label>
      <input
        type="text"
        data-testid="name-filter"
        id="searchbar"
        onChange={(event) => setText(event.target.value)}
      />
      <SelectInputs />
    </form>
  );
}

export default SearchBar;
