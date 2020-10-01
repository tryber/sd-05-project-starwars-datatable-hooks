import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import Proptypes from 'prop-types';
// import removeFiltros from '../actions/removeFiltros';
import { StarWarsContext } from '../context/StarWarsContext';

function IconeX() {
  // const { filtros } = this.props;
  const { filterByNumericValues: filtros, setFilterByNumericValues } = useContext(StarWarsContext);
  return (
    <div>
      <span>Filtros:</span>
      <br />
      <br />
      {filtros.map((filtross) => (
        <div data-testid="filter">
          <button
            onClick={(e) => setFilterByNumericValues(filtros.filter(
              (filtro) => filtro.column !== e.target.id))}
            id={filtross.column}
          >
            X
          </button>
          {filtross.column}{/* |{filtro.comparison}|{filtro.value} */}
        </div>
      ))}
      <br />
      <br />
    </div>
  );
}

/* const mapStateToProps = (state) => ({
  filtros: state.filters.filterByNumericValues,
}); */

/* const mapDispatchToProps = (dispatch) => ({
  handleClick: (event) => dispatch(removeFiltros(event)),
}); */

/* IconeX.propTypes = {
  handleClick: Proptypes.func.isRequired,
  filtros: Proptypes.arrayOf(Proptypes.object).isRequired,
}; */

// export default connect(mapStateToProps, mapDispatchToProps)(IconeX);
export default IconeX;
