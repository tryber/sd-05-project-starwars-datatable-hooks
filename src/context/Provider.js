import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import getPlanets from '../services/data';

const SwProvider = ({ children }) => {
  const swData = () => getPlanets();
  const [planetas, setPlanetas] = useState([]);

  const context = {
    swData,
    setPlanetas,
    planetas,
  };
  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};
SwProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SwProvider;
