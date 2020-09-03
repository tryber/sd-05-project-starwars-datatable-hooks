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
  const [selectedOptions, setSelectedOptions] = useState([]);
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
    order: {
      column: 'name',
      sort: 'ASC',
    },
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

  const updateOrder = (sort, column) => {
    setFilters({
      ...filters,
      order: {
        column,
        sort,
      },
    });
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

  const updateSelectedOptions = (column, value, comparison) => {
    setSelectedOptions([...selectedOptions, { column, comparison, value }]);
  };

  const removeSelectedOption = (column) => {
    setSelectedOptions(selectedOptions.filter((option) => option.column !== column));
  };

  const removeFilter = (column) => {
    const updatedNumericFilter = filters.filterByNumericValues.filter(
      (filter) => filter.column !== column,
    );
    const updatedFilters = {
      ...filters,
      filterByNumericValues: updatedNumericFilter,
    };
    setFilters(updatedFilters);
  };

  useEffect(() => {
    api().then((response) => setData(response.results) && setFilteredData(response.results));
    setLoading(false);
  }, []);

  useEffect(() => {
    const { name: planetName } = filters.filterByName;
    const { filterByNumericValues } = filters;
    const { sort, column } = filters.order;

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

    if (column !== 'name' && sort === 'ASC') {
      updateData.sort((a, b) => (Number(a[column]) > Number(b[column]) ? 1 : -1));
    } else if (column === 'name' && sort === 'ASC') {
      updateData.sort((a, b) => (a[column] > b[column] ? 1 : -1));
    } else if (column !== 'name' && sort === 'DESC') {
      updateData.sort((a, b) => (Number(a[column]) > Number(b[column]) ? -1 : 1));
    } else {
      updateData.sort((a, b) => (a[column] > b[column] ? -1 : 1));
    }

    setFilteredData(updateData);
  }, [filters, data]);

  const contextValue = {
    updateFilterByName,
    updateFilterByNumericValues,
    updateSelectedOptions,
    updateOrder,
    removeFilter,
    removeSelectedOption,
    selectedOptions,
    filteredData,
    loading,
  };

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
