/* eslint no-param-reassign: ["error", { "props": false }] */

import React, { Component } from 'react';
import StarwarsContext from '../context/StarwarsContext';
import {
  TABLE_KEYS,
  rKey,
  formatName,
} from '../services/Utils';

function Header() {
  return (
    <thead>
      <tr>
        {
          TABLE_KEYS.map((header) =>
            <th key={rKey(header)}>{formatName(header)}</th>,
          )
        }
      </tr>
    </thead>
  );
}

const renderFiltered = (planetList) => (
  <StarwarsContext.Consumer>
    {
      ({ filters: { filterByNumericValues, filterByName } }) => {
        planetList.forEach((planet) => {
          planet.visible = true;
          filterByNumericValues.forEach(({ column, comparison, value }) => {
            if (planet.visible) {
              switch (comparison) {
                case 'menor que':
                  planet.visible = Number(planet[column]) < Number(value);
                  break;
                case 'maior que':
                  planet.visible = Number(planet[column]) > Number(value);
                  break;
                case 'igual a':
                  planet.visible = Number(planet[column]) === Number(value);
                  break;
                default:
                  break;
              }
            }
          });
        });
        return (
          planetList
            .filter((planet) => planet.visible)
            .filter(({ name }) => name.toUpperCase().includes(filterByName.name.toUpperCase()))
            .map((planet) => (
              <tr key={rKey(planet.name)}>
                {TABLE_KEYS.map((keys) => <td key={rKey(planet.url)}>{planet[keys]}</td>)}
              </tr>
            ))
        );
      }
    }
  </StarwarsContext.Consumer>
);

class Table extends Component {

  render() {
    return (
      <StarwarsContext.Consumer>
        {
          ({ isLoading, planetList }) => {
            if (isLoading) return <div>Carregando..</div>;
            return planetList.length ?
            (
              <table>
                <Header />
                <tbody>
                  { renderFiltered(planetList) }
                </tbody>
              </table>
            ) : <div>error</div>;
          }
        }
      </StarwarsContext.Consumer>
    );
  }
}

export default Table;
