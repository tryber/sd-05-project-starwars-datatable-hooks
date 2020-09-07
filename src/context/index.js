import React, { createContex, useState, Children } from 'react';

const SWContext = createContext();

const SWProvider = ({children}) => {
  const [ planets, setPlanets ] = useState([]);
  const [ planetsColumns, setPlanetsColumns] = useState([]);
  const [ isFetching, setIsFetching ] = useState(false);
  const [ error, setError ] = useState(false);

  const context = {};
  return (
    <SWContext.Provider value={context}>
      {children}
    </SWContext.Provider>
  )
}

export { SWContext, SWProvider as Provider};
