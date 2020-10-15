import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../api/data';

// consultado repo Hugão meu ídolo para reflexão
// e construção da API no Provider

function Provider(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cabecalho, setCabecalho] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [reduxOrder, setReduxOrder] = useState({ column: 'Name', sort: 'ASC' });
  const [comparison, setComparison] = useState('');
  const [column, setColumn] = useState('Name');
  const [sort, setSort] = useState('ASC');

  useEffect(() => {
    getPlanets()
      .then((response) => {
        setData(response);
        setCabecalho(Object.keys(response[0]).filter((titulo) => titulo !== 'residents'));
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
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    reduxOrder,
    setReduxOrder,
    comparison,
    setComparison,
    column,
    setColumn,
    sort,
    setSort,
  };
  return <StarWarsContext.Provider value={contexto}>{props.children}</StarWarsContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
