import React, { useContext } from 'react';
import SWContext from '../../context/SWContext';

const ValueFilter = () => {
  const { setValueFilter } = useContext(SWContext);
  return (
    <input
      type="text"
      onChange={({ target }) => setValueFilter(target.value)}
      data-testid="value-filter"
    />
  );
};
export default ValueFilter;
