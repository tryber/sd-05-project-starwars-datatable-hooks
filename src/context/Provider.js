import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import api from '../service/api';

// Referência:
// https://github.com/tryber/sd-05-live-lectures/blob/live-lectures/react-useState-useContext/enterprise-bridge-panel/src/components/EnterpriseContext.js

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  const comparisonOperator = (column, comparison, value) => {
    switch (comparison) {
      case 'maior que':
        return column > value;
      case 'menor que':
        return column < value;
      case 'igual a':
        return column === value;
      default:
        return true;
    }
  };

  const updateFilterByName = (name) => {
    setFilters({
      ...filters,
      filterByName: { name },
    });
  };

  const updateFilterByNumericValues = (column, value, comparison) => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, { column, comparison, value }],
    });
  };

  useEffect(() => {
    api().then((response) => setData(response.results) && setFilteredData(response.results));
    setLoading(false);
  }, []);

  useEffect(() => {
    const { name: planetName } = filters.filterByName;
    const { filterByNumericValues } = filters;

    const updateData = data
      .filter((planet) => planet.name.toLowerCase().includes(planetName.toLowerCase()))
      .filter((planet) => {
        let retorno = true;
        for (let i = 0; i < filterByNumericValues.length; i += 1) {
          if (
            !comparisonOperator(
              Number(planet[filterByNumericValues[i].column]),
              filterByNumericValues[i].comparison,
              Number(filterByNumericValues[i].value),
            )
          ) {
            retorno = false;
          }
        }
        return retorno;
      });

    setFilteredData(updateData);
  }, [filters, data]);

  const contextValue = {
    updateFilterByName,
    updateFilterByNumericValues,
    filteredData,
    loading,
  };

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
