import React from 'react';
import { useContext, useEffect } from 'react';
import Context from '../context/StarWarsContext';
import Head from './cabecalho';
import getApi from '../services/getApi';
import Body from './body';

/* const luca = (setData) => getApi().then((resposta) => setData(resposta.results)); */

const Table = () => {
  const { setData } = useContext(Context);
  useEffect(() => {
    getApi().then((resposta) => setData(resposta.results));
  }, []);
  /* Head criado para renderizar cabeçalho economizando linhas
dentro do render por causa do cc */
  /* Body criado para renderizar os dados da tabela.  */
  return (
    <table>
      <Head />
      <Body />
    </table>
  );
};

export default Table;
