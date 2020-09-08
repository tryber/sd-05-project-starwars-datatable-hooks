import React, { useContext } from 'react';
import { SWContext } from '../context';
import Item from './FilterItem';

const FilterListItems = () => {
  const { filterByNumericValues } = useContext(SWContext);
  return filterByNumericValues.map((item, index) => (
    <Item item={item} index={index} key={index.toString()} />
  ));
};

export default FilterListItems;
