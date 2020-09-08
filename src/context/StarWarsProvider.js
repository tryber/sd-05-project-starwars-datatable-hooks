import React, { useState } from "react";
import StarWarsContext from "./StarWarsContext";

const StarWarsProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);

  const context = {
    isFetching,
    setIsFetching,
    data,
    setData,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;
