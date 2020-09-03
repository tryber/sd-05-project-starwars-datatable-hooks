import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getCurrentSW from '../services/API';

export default function Provider(props) {
  const [isFetching, setIsFetching] = useState(false);
  const [planets, setPlanets] = useState(null);
  const [filterByName, setFilterByName] = useState({ name: '' });

  const state = {
    isFetching,
    planets,
    filterByName,
    setFilterByName,
  };

  useEffect(() => {
    getCurrentSW()
      .then((listPlanets) => { setPlanets(listPlanets); })
      .then(() => { setIsFetching(true); });
  }, []);

  return (
    <StarWarsContext.Provider value={state}>
      {props.children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
