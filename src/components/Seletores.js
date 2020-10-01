import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import Proptypes from 'prop-types';
// import selectTitle from '../actions/selectTitle';
import { StarWarsContext } from '../context/StarWarsContext';

// const titutosCabecalho = ['population', 'orbital_period',
// 'diameter', 'rotation_period', 'surface_water'];

function Seletores() {
  const { filterByNumericValues: filtros, setColumn: valorFiltro } = useContext(StarWarsContext);
  /* componentDidMount() {
    this.props.buscaCabecalho(this.props.cabecalho);
  } */
    /* console.log(this.props) */
  const colunas = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  // const { filtros } = this.props;
  if (filtros.length > 0) {
    filtros.forEach((filtro) => {
      colunas.splice(colunas.indexOf(filtro.column), 1);
    });
  }
  return (
    <div>
      <select
        data-testid="column-filter" onChange={(e) => valorFiltro(e.target.value)}
      >
        <option value="" defaultValue>Coluna</option>
        { colunas.map((titulo) => <option value={titulo}>{titulo}</option>) }
        {/*  { this.props.cabecalho.map(titulo => <option>{titulo}</option>) } */}
      </select>
      <br />
      <br />
    </div>
  );
}

/* const mapStateToProps = (state) => ({
  filtros: state.filters.filterByNumericValues,
}); */

/* const mapDispatchToProps = (dispatch) => ({
  valorFiltro: (valorSelecionado) => dispatch(selectTitle(valorSelecionado)),
}); */

/* Seletores.propTypes = {
  valorFiltro: Proptypes.func.isRequired,
  filtros: Proptypes.arrayOf(Proptypes.object).isRequired,
}; */

// export default connect(mapStateToProps, mapDispatchToProps)(Seletores);
export default Seletores;
