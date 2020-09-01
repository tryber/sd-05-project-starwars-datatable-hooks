import React, { useState } from 'react';
import Proptypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const StarWarsProvider = ({ children }) => {
  // put all states that were part of former reducers and their initial value
  const [dataApi, setDataApi] = useState([]);
  const [allFilters, setAllFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  // create a unique value as if it was the redux store
  const allInfos = {
    dataApi,
    setDataApi,
    filterName: allFilters.filterByName,
    filterNumber: allFilters.filterByNumericValues,
    setAllFilters,
  };

  return (
    <StarWarsContext.Provider value={allInfos}>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: Proptypes.arrayOf(Proptypes.element).isRequired,
};

export default StarWarsProvider;
