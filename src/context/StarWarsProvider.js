import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/getPlanets';

const StarWarsProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [property, setProperty] = useState('');
  const [parameter, setParameter] = useState('');
  const [number, setNumber] = useState('');
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const setName = (planet) => {
    setFilters({ ...filters, filterByName: { name: planet } });
  };

  const setChange = (value, key) => {
    switch (key) {
      case 'column':
        setProperty(value);
        break;
      case 'comparison':
        setParameter(value);
        break;
      case 'value':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const deleteFilter = (erased) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues.filter((option) => option !== erased),
      ],
    });
  };

  const filterValues = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column: property, comparison: parameter, value: number },
      ],
    });
    setProperty('');
    setParameter('');
    setNumber('');
  };

  const requestPlanets = (planet) => {
    setData(planet.results);
    setIsFetching(false);
  };

  const fetchGetPlanet = () => {
    setIsFetching(true);
    getPlanets().then((planet) => requestPlanets(planet));
  };

  const context = {
    isFetching,
    setIsFetching,
    data,
    setData,
    fetchGetPlanet,
    filters,
    setFilters,
    setName,
    setChange,
    filterValues,
    parameter,
    property,
    number,
    deleteFilter,
  };

  return <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>;
};
export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
