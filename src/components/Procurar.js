import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import Proptypes from 'prop-types';
// import procurarPlaneta from '../actions/procurarPlaneta';
import { StarWarsContext } from '../context/StarWarsContext';

function Procurar() {
  const { setName: buscaPlaneta } = useContext(StarWarsContext);
  return (
    <div>
      <span>Procurar: </span>
      <input
        type="text"
        data-testid="name-filter"
        onChange={(e) => buscaPlaneta(e.target.value)}
      />
    </div>
  );
}

/* const mapStateToProps = (state) => ({
  nome: state.reducerBasico.name,
}); */

/* const mapDispatchToProps = (dispatch) => ({
  buscaPlaneta(nomePlaneta) {
    dispatch(procurarPlaneta(nomePlaneta));
  },
}); */

/* Procurar.propTypes = {
  buscaPlaneta: Proptypes.func.isRequired,
}; */

// export default connect(mapStateToProps, mapDispatchToProps)(Procurar);
export default Procurar;
