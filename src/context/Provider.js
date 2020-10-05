import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';

function Provider(props) {
  const [] = useState([]);
  const contexto = {};
  return <StarWarsContext.Provider value={contexto}>{props.children}</StarWarsContext.Provider>;
}

export default Provider;
