import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { removeFilter } from '../actions';

function AllFilters() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(
    StarWarsContext
  );

  function hC(e) {
    // Uma cópia de filtros apenas para não fazer alteração na base
    const filtrosCopia = [...filterByNumericValues];
    const filtrosFinal = filterByNumericValues.map((filt) => filt.column);
    filtrosCopia.splice(filtrosFinal.indexOf(e.target.id), 1);
    setFilterByNumericValues(filtrosCopia);
  }
  // prettier-ignore
  return (
      <div>
        {filterByNumericValues.map((filt) => (
          <div key={filt.column} data-testid="filter">
            {`${filt.column} ${filt.comparison} ${filt.value}`}
            <button id={filt.column} onClick={(e) => hC(e)}>
              X
            </button>
          </div>
        ))}
      </div>
    );
}

// const mapStateToProps = (state) => ({
//   filtros: state.filters.filterByNumericValues,
// });

// const mapDispatchToProps = (dispatch) => ({
//   remove: (a) => dispatch(removeFilter(a)),
// });

export default AllFilters;

// AllFilters.propTypes = {
//   filtros: PropTypes.arrayOf(PropTypes.object).isRequired,
//   remove: PropTypes.func.isRequired,
// };
