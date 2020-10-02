import React, { Component } from 'react';
import Context from '../context/StarWarsContext';
import { pegandoNomeAction } from '../actions';
import { useContext } from 'react';

const SearchBar = () => {
  const { setFilterByName: pegarNome } = useContext(Context);
  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={(event) => pegarNome(event.target.value)}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  pegarNome: (name) => dispatch(pegandoNomeAction(name)),
});

export default SearchBar;
