import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../api/data';

// igual o createStore
export const StarWarsContext = createContext();

// usaState é uma hooks. useState deixa usar o estado
// Eu desconstrui a variável e a função de um array
export const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cabecalho, setCabecalho] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({ column: 'Name', sort: 'ASC' });
  const [ordenacaoAtivada, setOrdenacaoAtivada] = useState(true);
  const [comparison, setComparison] = useState('');
  const [column, setColumn] = useState('');
  const [value, setValue] = useState('');
  useEffect(() => {
    getPlanets().then((response) => {
      setData(response);
      setCabecalho(Object.keys(response[0]).filter((titulo) => (titulo !== 'residents')));
    })
    .then(() => setIsLoading(false));
  }, []);
  const context = {
    data,
    setData,
    isLoading,
    setIsLoading,
    cabecalho,
    setCabecalho,
    name,
    setName,
    filterByNumericValues,
    setFilterByNumericValues,
    order,
    setOrder,
    ordenacaoAtivada,
    setOrdenacaoAtivada,
    comparison,
    setComparison,
    column,
    setColumn,
    value,
    setValue,
  };
  // console.log('Este é o data: ' , data)
  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
