import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function Provider(props) { // provê infos
  const [data, setData] = useState([]); // valores, responsabilidades
  const [isFetching, setIsFetching] = useState(true);
  const [nombreProcurado, setNombreProcurado] = useState('');
  const [numericFilter, setNumericFilter] = useState([]);
  const [options, setOptions] = useState([]);
  const [filterOrder, setFilterOrder] = useState({});
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const { children } = props;

  const context = { // pode ser batatinha
    data,
    setData,
    isFetching,
    setIsFetching,
    nombreProcurado,
    setNombreProcurado,
    numericFilter,
    setNumericFilter,
    options,
    setOptions,
    filterOrder,
    setFilterOrder,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    // contexto é o que a gente distribui para toda a árvore de comp.
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.element.isRequired,
};
