import React, { useContext } from 'react';
import { SWContext } from '../context';

const ColumnOptions = () => {
  const { planetsColumns } = useContext(SWContext);
  return planetsColumns.map((column, optIndex) => (
    <option value={column} key={optIndex.toString()}>
      {column}
    </option>
  ));
};

export default ColumnOptions;
