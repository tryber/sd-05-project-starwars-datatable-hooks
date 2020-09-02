// // import PropTypes from 'prop-types';
import React, { useContext } from 'react';
// // import { connect } from 'react-redux';
// // import { removeFilter } from '../reducers/filters';
import { StarWarsContext } from '../../context/starWarsContext';

// // filterByNumericValues: state.filterByNumericValues.filter(
// //   ({ column }) => column !== ,

const FilterDisplay = () => {
  const { filterByValues, setValues } = useContext(StarWarsContext);

  const removeThisFilter = (filterCol) => {
    const newFilters = filterByValues.filter(
      ({ col }) => col !== filterCol,
    );
    setValues(newFilters);
  };
    // const { handleChangeName } = this.props;
  // const { filterByNumericValues, removeThisFilter } = this.props;
  if (filterByValues.length > 0) {
    return (
      <div>
        <h2>Filtros ativos:</h2>
        {filterByValues.map((filtro) => (
          <div key={filtro.col} data-testid="filter">
            <ul>
              <li>{filtro.col}</li>
              <li>{filtro.comp}</li>
              <li>{filtro.val}</li>
            </ul>
            <button type="button" onClick={() => removeThisFilter(filtro.col)}>X</button>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// // const mapDispatchToProps = { removeThisFilter: removeFilter };

// // const mapStateToProps = (state) => ({
// //   filterByNumericValues: state.filters.filterByNumericValues,
// // });

export default FilterDisplay;

// // FilterDisplay.propTypes = {
// //   filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
// //   removeThisFilter: PropTypes.func.isRequired,
// // };
