import React, { useContext } from 'react';
import { useEffect } from 'react';
import Tableheaders from './tableheaders';
import StarWarsContext from '../context/StarWarsContext';
import TableValues from './tabelvalues';

function Table() {
  const { swData, setPlanetas, planetas, searchText, filters } = useContext(
    StarWarsContext,
  );
  useEffect(() => {
    swData().then((data) => setPlanetas(data.results));
  }, []);
  const filterTest = (() => {
    let data = planetas;
    if (filters.filterByNumericValues.length > 0) {
      filters.filterByNumericValues.forEach((element) => {
        const { column, comparison, value } = element;
        if (comparison === 'maior que') {
          data = data.filter((plani) => +plani[column] > +value);
        } else if (comparison === 'menor que') {
          data = data.filter((plani) => +plani[column] < +value);
        } else if (comparison === 'igual a') {
          data = data.filter((plani) => +plani[column] === +value);
        }
      });
    }
    return data;
  });
  const pFiltered = filterTest();
  return (
    <section>
      <table>
        <Tableheaders />
        {pFiltered
          .filter((planets) =>
            planets.name.toLowerCase().includes(searchText.toLowerCase()),
          )
          .map((elements) => (
            <TableValues key={elements.diameter} elements={elements} />
          ))}
      </table>
    </section>
  );
}

export default Table;
