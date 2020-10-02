import React from 'react';
import Context from '../context/StarWarsContext';
import Head from './cabecalho';
import { useEffect } from 'react';
import getApi from '../services/getApi';
import { useContext } from 'react';
import Body from './body';

const luca = (setData) => getApi().then((resposta) => setData(resposta.results))

const Table = () => {
  const { setData } = useContext(Context);
  useEffect(() => luca(setData), []);
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
