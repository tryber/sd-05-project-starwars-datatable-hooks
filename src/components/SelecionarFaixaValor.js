import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
// import { connect } from 'react-redux';
// import Proptypes from 'prop-types';
// import selectComparacao from '../actions/selectComparacao';

const arrayValores = ['maior que', 'igual a', 'menor que'];

function SelecionarFaixaValor() {
  const { setComparison: valorComparacao } = useContext(StarWarsContext);
  return (
    <div>
      <select
        data-testid="comparison-filter" placeholder="Comparação"
        onChange={(e) => valorComparacao(e.target.value)}
      >
        <option>Comparação</option>
        { arrayValores.map((faixa) => <option value={faixa}>{faixa}</option>) }
      </select>
      <br />
      <br />
    </div>
  );
}

/* const mapDispatchToProps = (dispatch) => ({
  valorComparacao: (valorSelecionado) => dispatch(selectComparacao(valorSelecionado)),
}); */

/* SelecionarFaixaValor.propTypes = {
  valorComparacao: Proptypes.arrayOf(Proptypes.object).isRequired,
}; */

// export default connect(null, mapDispatchToProps)(SelecionarFaixaValor);
export default SelecionarFaixaValor;
