import React from 'react';
import TableHeader from './TableHeader';
import TableFrame from './TableFrame';
import './Table.css';

const Table = () => (
  <table className="table-planets">
    <TableHeader />
    <TableFrame />
  </table>
);

export default Table;
