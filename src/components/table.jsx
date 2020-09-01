import React, { useContext } from 'react';
import { useEffect } from 'react';
import Tableheaders from './tableheaders';
import StarWarsContext from '../context/StarWarsContext';
import TableValues from './tabelvalues';

function Table() {
  const { swData, setPlanetas, planetas } = useContext(StarWarsContext);
  useEffect(() => {
    swData().then((data) => setPlanetas(data.results));
  }, []);
  return (
    <section>
      <table>
        <Tableheaders />
        {planetas.map((elements) => (
          <TableValues key={elements.diameter} elements={elements} />
        ))}
      </table>
    </section>
  );
}

export default Table;
