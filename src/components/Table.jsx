
import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import TableData from './TableData';
// import SearchBar from './SearchBar';
import './Table.css';
import { StarWarsContext } from '../context/StarWarsContext';

function tableHead() {
  return (
    <thead className="table">
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
  );
}

export default function Table() {
  const { fetchPlanets, isFetching } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
    /* console.log(data); */
  }, []);

  if (isFetching) return <div>Loading...</div>;

  return (
    <div>
      <div>StarWars Datatable with Filters</div>
      {/* <SearchBar /> */}
      <table>
        {tableHead()}
        <TableData />
      </table>
    </div>
  );
}

// Para resolver o problema do codeclimate 'prop-type object is forbiden', utilizei a função InstanceOf que encontrei neste site: https://github.com/yannickcr/eslint-plugin-react/issues/2079

/* Table.propTypes = {
  fetchData: PropTypes.instanceOf(Object).isRequired,
}; */

