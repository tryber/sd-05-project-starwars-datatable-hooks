import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../api/data';

function Provider(props) {
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

  const contexto = {
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
  return <StarWarsContext.Provider value={contexto}>{props.children}</StarWarsContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.any.isRequired,
};
