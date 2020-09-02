import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import filtering from '../../services/filtering';

function Table() {
  const { planets, filters, order } = useContext(StarWarsContext);
  if (!planets) return <h1>Loading</h1>;
  const planetas = filtering(planets, filters, order);
  return (
    <table>
      <TableHeader planets={planetas} />
      <TableBody planets={planetas} />
    </table>
  );
}

export default Table;
