import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({
    column: 'Name',
    sort: 'ASC',
  });
  const [ordenar, setOrdenar] = useState(true);
  const orderFunction = (estado, valor) =>
    setOrder((estadoAtual) => ({ ...estadoAtual, [estado]: valor }));
  const byNumericValuesFunction = (valor) =>
    setFilterByNumericValues((estado) => ([ ...estado, valor ]));
  const context = {
    isFetching,
    setIsFetching,
    planets,
    setPlanets,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    byNumericValuesFunction,
    order,
    orderFunction,
    ordenar,
    setOrdenar,
  };
  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
