import React, { useContext } from 'react';
import propTypes from 'prop-types';
import TBody from './TBody';
import FilterBar from './FilterBar';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { data, loading } = useContext(StarWarsContext);
  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>StarWars Datatable with Filters</h2>
      <div>
        <FilterBar />
      </div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((title) => (
              title === 'residents' ? false : <th key={title}>{title}</th>))}
          </tr>
        </thead>
        <TBody />
      </table>
    </div>
  );

}

// Table.propTypes = {
//   loading: propTypes.bool.isRequired,
//   data: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
// };
