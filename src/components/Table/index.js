import React, { useEffect } from 'react';
import { useContext } from 'react';
import queryFilters from '../../services/queryFilters';
import { StarWarsContext } from '../../context/StarWarsContext';
import fetchPlanets from '../../services/fetchPlanets';

const Table = () => {
  const {
    data,
    setData,
    isFetching,
    setIsFetching,
    name,
    filterByNumericValues,
    order: { column },
    order: { sort },
  } = useContext(StarWarsContext);
  useEffect(() => {
    setIsFetching(true);
    fetchPlanets()
      .then((response) => response)
      .then((json) => {
        setData(json.results);
        setIsFetching(false);
      });
  }, [setData, setIsFetching]);

  let ths = [];
  if (data.length > 0) ths = Object.keys(data[0]);
  ths.splice(ths.indexOf('residents'), 1);
  const allPlanets = queryFilters(data, name, filterByNumericValues, column, sort);
  if (isFetching) return <h2>Loading</h2>;
  return (
    <table>
      <thead>
        <tr>
          {ths.map((info) => (
            <th key={info}>{info}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {allPlanets.map((info) => (
          <tr key={Math.random(99999999)}>
            {ths.map((datas) => (
              <td
                data-test-id={datas === 'name' ? 'planet-name' : ''}
                key={Math.random(9999999)}
              >
                {info[datas]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
