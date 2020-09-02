import React, { createContext, useState } from 'react';

export const StarWarsContext = createContext();

function StarWarsContextProvider(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const context = { loading, setLoading, data, setData };

  return <StarWarsContext.Provider value={context}>{props.children}</StarWarsContext.Provider>;
}

export default StarWarsContextProvider;
