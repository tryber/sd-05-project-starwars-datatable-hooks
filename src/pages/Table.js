import React, { Fragment } from 'react';
import TableHeader from '../components/TableHeader';
import TableBody from '../components/TableBody';
import FilterByName from '../components/filters/filterByName';
import FilterNumber from '../components/filters/filterByNumber';
import '../components/table.css'

function Table() {
  return (
    <Fragment>
      <FilterByName />
      <FilterNumber />
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </Fragment>
  )
}

export default Table;
