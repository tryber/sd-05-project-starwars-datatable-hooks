import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const ValueFilter = () => {
  const { setValueFilter } = useContext(StarWarsContext);
  return (
    <input
      type="text"
      onChange={({ target }) => setValueFilter(target.value)}
      data-testid="value-filter"
    />
  );
};
export default ValueFilter;
