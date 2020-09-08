import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchBar() {
  const { setName } = useContext(StarWarsContext);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Digite o nome do planeta"
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}
