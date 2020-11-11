import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableBody from './TableBody';
import starWarsAPI from '../service/starWarsAPI';

const Table = () => {
  const { loading, setLoading, setData } = useContext(StarWarsContext);
  useEffect(() => {
    starWarsAPI().then((response) => {
      setData(response.results);
      setLoading(false);
    });
  }, []);
  return (
    !loading ?
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Film</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          <TableBody />
        </tbody>
      </table> : <div>Loading...</div>
  );
};

export default Table;
