import React, { Component, Fragment } from 'react';
import TableHeader from '../components/TableHeader';
import TableBody from '../components/TableBody';
import MyContext from '../context/context';
import '../components/table.css'

class Table extends Component {
  render() {
    const { planets } = this.context;
    return (
      <Fragment>
        <TableHeader />
        <TableBody data={planets} />
      </Fragment>
    )
  }
}

Table.contextType = MyContext;

export default Table;
