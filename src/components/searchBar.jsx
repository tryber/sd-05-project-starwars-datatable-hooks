import React from 'react';
import { useContext } from 'react';
import Context from '../context/StarWarsContext';

const SearchBar = () => {
  const { setFilterByName: pegarNome } = useContext(Context);
  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={(event) => pegarNome(event.target.value)}
    />
  );
};

export default SearchBar;
