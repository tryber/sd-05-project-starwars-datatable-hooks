import React, { useContext } from 'react';
import TableBody from '../TableBody';
import { StarWarsContext } from '../../context/StarWarsContext';
// anderson godoy
//import filterSort from '../../services/FilterSort';

const TBody = (props) => {
  const {
    isFetching,
  } = useContext(StarWarsContext);

  const { allPlanets } = props;
  //const planetsFiltered = filterSort(allPlanets, order, sort);

  return (
    <tbody>
      {isFetching === false
        ? allPlanets.map((infoPlaneta) => (
          <TableBody
            key={Math.floor(Math.random() * 0x100000)}
            data={infoPlaneta}
          />
          ))
        : null}
    </tbody>
  );
}

export default TBody;

