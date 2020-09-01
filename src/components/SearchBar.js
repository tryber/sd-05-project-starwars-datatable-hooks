import React, { useContext } from 'react';
import FilterNumber from './FilterNumber';
import FilterNumberOptions from './FilterNumberOptions';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const { setFilterByName } = useContext(StarWarsContext);
  const handleChange = (e) => {
    setFilterByName({ name: e.target.value });
  };
  return (
    <div>
      <label htmlFor="filter-name">
        Procurar
        <input data-testid="name-filter" name="filter-name" type="text" onChange={handleChange} />
      </label>
      <FilterNumber />
      <FilterNumberOptions />
    </div>
  );
}

export default SearchBar;
