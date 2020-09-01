import React, { useContext } from 'react';
import SWContext from '../../context/SWContext';

const ColumnFilter = () => {
  const { columns } = useContext(SWContext);
  // let newOptions = options;
  // filters.forEach((filter) => {
  //   newOptions = newOptions.filter((opt) => filter.column !== opt);
  // });

  return (
    <select data-testid="column-filter">
      <option>Coluna</option>
      {columns.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ColumnFilter;