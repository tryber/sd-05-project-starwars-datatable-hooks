import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filter = () => {
  const { updateFilterByName } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="text-input">Digite o nome de um planeta:</label>
      <input
        id="text-input"
        data-testid="name-filter"
        onChange={(event) => updateFilterByName(event.target.value)}
      />
    </div>
  );
};

export default Filter;
