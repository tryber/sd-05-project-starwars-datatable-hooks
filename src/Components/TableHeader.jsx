import React, { useContext } from 'react';
import TableHeaderCell from './TableHeaderCell';
import { SWContext } from '../context';

const TableReader = () => {
  const { isFetching, planetsColumns } = useContext(SWContext);
  return (
    <thead className="table-header">
      <tr className="header-row">
        {!isFetching &&
          planetsColumns.map((colName, index) => (
            <TableHeaderCell name={colName} key={`coll-${index.toString()}`} />
          ))}
      </tr>
    </thead>
  );
};

export default TableReader;
