import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchPlanets from '../services/fetchPlanets';

export const StarWarsContext = createContext();

function StarWarsContextProvider(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchPlanets().then((planets) => setData(planets.results));
    setLoading(false);
  }, []);

  const context = { loading, data, nameFilter, setNameFilter };

  return <StarWarsContext.Provider value={context}>{props.children}</StarWarsContext.Provider>;
}

StarWarsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsContextProvider;
