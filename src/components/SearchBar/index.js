import React, { useContext } from 'react';
import SWContext from '../../context/SWContext';

const SearchBar = () => {
  const { searchText } = useContext(SWContext);
  return (<input
    data-testid="name-filter"
    type="text"
    onChange={({ target }) => searchText(target.value)}
  />);
};

export default SearchBar;
