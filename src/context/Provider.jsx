import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterName, setFilterName] = useState({
    filterName: {
      name: ''
    },
  });
  const [numericFilter, setNumericFilter] = useState([])
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setValue] = useState();
  const [controller, setController] = useState(
    {
    rotation_period: true,
    orbital_period:  true,
    diameter: true,
    surface_water:true,
    population:true
    }
    )
  const [filterColumns, setFilterColumns] = useState([
    'rotation_period', 'orbital_period', 'diameter', 'surface_water', 'population'
  ]);
  const state = {
    data,
    setData,
    loading,
    setLoading,
    filterName,
    setFilterName,
    filterColumns,
    setFilterColumns,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    numericFilter,
    setNumericFilter,
    controller,
    setController,
  };

  return (
    <StarWarsContext.Provider value={state}>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
