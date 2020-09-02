/* eslint-disable react/no-unused-prop-types */
import React, { useContext } from 'react';
import MyContext from '../../context/context';
import propTypes from 'prop-types';

function FilterByName() {
  const { setFilterName } = useContext(MyContext)
  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={(event) => setFilterName(event.target.value)}
    />
  );
}

export default FilterByName;

FilterByName.propTypes = {
  searchFilter: propTypes.func.isRequired,
};
