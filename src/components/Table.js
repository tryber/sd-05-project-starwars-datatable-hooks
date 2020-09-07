import React, { useContext, useEffect } from 'react';
// import propTypes from 'prop-types';
import getPlanets from '../service/planetsAPI';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import StarWarsContext from '../context/StarWarsContext';

function Table() {

  const { setIsFetching, setData } = useContext(StarWarsContext);

  useEffect(() => {
    setIsFetching(true);
    getPlanets()
      .then((data) => setData(data.results));
  }, [setIsFetching, setData]);

  console.log(getPlanets());
  
  return (
    <div>
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
