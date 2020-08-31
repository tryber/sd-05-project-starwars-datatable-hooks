import React, { useContext } from 'react';
import SWContext from '../../context/SWContext';

const SearchBar = () => {
  const { setFilterByName } = useContext(SWContext);
  return (<input
    data-testid="name-filter"
    type="text"
    onChange={({ target }) => setFilterByName(target.value)}
  />);
};

export default SearchBar;
