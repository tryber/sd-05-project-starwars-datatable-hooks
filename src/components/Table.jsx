import React, { Fragment } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import { handleAsyncFetch } from '../services/fetchApi';
import Thead from './THead';
import allFilteredFunc from '../services/functions';

const Table = () => {
  const { data, setData, filterByNumericValues } = useContext(StarWarsContext);
  const { name } = useContext(StarWarsContext);

  useEffect(() => {
    // console.log('debugger');
    // setMovies(handleAsyncFetch())
    handleAsyncFetch().then((res) => setData(res));
    // console.log(filmes)
    // setMovies(handleAsyncFetch())
  }, []);

  return (
    <Fragment>
      <table>
        <Thead />
        {allFilteredFunc(data, name, filterByNumericValues).map((planet) => (
          <tbody key={planet.name}>
            <tr>
              {Object.values(planet).map((colunas) => {
                if (colunas !== 'residents') {
                  return <td key={colunas}>{colunas}</td>;
                }
                return null;
              })}
            </tr>
          </tbody>
        ))}
      </table>
    </Fragment>
  );
};

export default Table;
