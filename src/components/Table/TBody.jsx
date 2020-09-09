import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TableBody from '../TableBody';
import { StarWarsContext } from '../../context/StarWarsContext';
// anderson godoy ss
import filterSort from '../../services/FilterSort';

const TBody = (props) => {
  const {
    fetching,
    columnValue,
    sortValue,
  } = useContext(StarWarsContext);

  const { allPlanets } = props;
  const planetsFiltered = filterSort(allPlanets, columnValue, sortValue);

  return (
    <tbody>
      {fetching === false
        ? planetsFiltered.map((infoPlaneta) => (
          <TableBody
            key={Math.floor(Math.random() * 0x100000)}
            data={infoPlaneta}
          />
          ))
        : null}
    </tbody>
  );
};

TBody.propTypes = {
  allPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TBody;
