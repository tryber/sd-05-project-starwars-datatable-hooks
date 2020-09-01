/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import compareFunc from '../services/compareFunc';
import StarWarsContext from '../context/StarWarsContext';
// import '../layouts/StarWars.css';

export default function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const filterPlanet = compareFunc(data, filters.filterByName.name, filters.filterByNumericValues);
  const attributes = data[0]
    ? Object.keys(data[0]).filter((attribute) => attribute !== 'residents')
    : [];
  return (
    // <div className="filter">
    <div>
      <thead>
        <tr>
          {attributes.map((index) => (<th key={index}>{`${index}`}</th>))}
        </tr>
      </thead>
      <tbody>
        {filterPlanet.map((planet) => (
          <tr key={planet.name}>
            {attributes.map((prop) => (
              <td key={prop}>{planet[prop]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </div>
  );
}
