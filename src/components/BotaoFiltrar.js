import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import Proptypes from 'prop-types';
// import filtroCompleto from '../actions/filtroCompleto';
import { StarWarsContext } from '../context/StarWarsContext';

function BotaoFiltrar() {
  /* constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  } */

  const { column, comparison, value, setFilterByNumericValues: filter } = useContext(
    StarWarsContext,
  );

  function handleClick() {
    /* console.log(this.props) */
    filter((oldFilter) => [...oldFilter, { column, comparison, value }]);
    return null;
  }

  return (
    <div>
      <button data-testid="button-filter" onClick={handleClick}>
        Filtrar
      </button>
      <br />
      <br />
    </div>
  );
}

/* const mapStateToProps = (state) => ({
  coluna: state.select.column,
  comparacao: state.select.comparison,
  valor: state.select.value,
}); */

/* const mapDispatchToProps = (dispatch) => ({
  filter: (objetao) => dispatch(filtroCompleto(objetao)),
}); */

/* BotaoFiltrar.propTypes = {
  filter: Proptypes.func.isRequired,
  valor: Proptypes.arrayOf(Proptypes.object).isRequired,
  comparacao: Proptypes.arrayOf(Proptypes.object).isRequired,
  coluna: Proptypes.arrayOf(Proptypes.object).isRequired,
}; */

// export default connect(mapStateToProps, mapDispatchToProps)(BotaoFiltrar);
export default BotaoFiltrar;
