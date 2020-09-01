import React, { useState } from 'react';
import Proptypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const StarWarsProvider = ({ children }) => {
  // put all states that were part of former reducers and their initial value
  const [dataApi, setDataApi] = useState([]);
  const [filterName, setFilterName] = useState({
    filterByName: {
      name: '',
    },
    // filterByNumericValues: [{
    //   column: '',
    //   comparison: '',
    //   value: '',
    // }],
    // abandoned this version, too heavy to manipulate in onClick
  });
  const [filterNumber, setFilterNumber] = useState([]);

  // create an equivalent of redux store to pass on to all consumers
  const allInfos = {
    dataApi,
    setDataApi,
    filterName: filterName.filterByName,
    setFilterName,
    filterNumber,
    setFilterNumber,
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
