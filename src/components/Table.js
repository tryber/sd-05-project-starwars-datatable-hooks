import React from 'react';
import TableBody from './TableBody';

export default function Table() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Terrain</th>
            <th>Diameter</th>
            <th>Gravity</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Population</th>
            <th>Surface Water</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>url</th>
          </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
};
