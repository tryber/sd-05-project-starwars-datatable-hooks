import React, { Fragment } from 'react';
import { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const FilterInput = () => {
  const { setFilters } = useContext(StarWarsContext);
  return (
    <Fragment>
      <input
        data-testid="name-filter"
        type="text"
        onChange={(e) => setFilters({ filterByName: { name: e.target.value } })}
      />
    </Fragment>
  );
};

export default FilterInput;
