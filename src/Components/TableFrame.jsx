import React, { useContext } from 'react';
import TableRow from './TableRow';
import {
  filterPlanetsByName,
  filterPlanetsNumeric,
  sortColumn,
} from '../HelperFunctions';
import { SWContext } from '../context';

const TableFrame = () => {
  const { planets, filterByNumericValues, name, order } = useContext(SWContext);
  let filteredPlanets = planets;

  filterByNumericValues.forEach((filter) => {
    filteredPlanets = filterPlanetsNumeric(filteredPlanets, filter);
  });
  filteredPlanets = filterPlanetsByName(filteredPlanets, name);

  filteredPlanets = sortColumn(filteredPlanets, order);

  return (
    <tbody className="table-body">
      {filteredPlanets
        .filter(({ name }) => name.toLowerCase().includes(name.toLowerCase()))
        .map((rowItems, rowId) => (
          <TableRow
            rowItems={Object.entries(rowItems)}
            rowId={rowId}
            key={`row-${rowId.toString()}`}
          />
        ))}
    </tbody>
  );
};

export default TableFrame;
