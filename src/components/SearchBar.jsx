import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const SearchBar = () => {
  const { setFilterByName, filterByName } = useContext(StarWarsContext);
  return (
    <input
      data-testid="name-filter"
      onChange={(event) =>
        setFilterByName({ ...filterByName, name: event.target.value })
      }
    />
  );
};

export default SearchBar;

/* Honestidade intelectual: linha 9 usei a referencia externa =>
https://daveceddia.com/usestate-hook-examples/
para descobrir como acessar o parametro "name" de dentro do state
*/
