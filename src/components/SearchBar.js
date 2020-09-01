import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchBar() {
  const { setTextFilter } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setTextFilter(event.target.value)}
        data-testid="name-filter"
      />
    </div>
  );
}
