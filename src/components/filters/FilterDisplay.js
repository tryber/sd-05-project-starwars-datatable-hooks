// // import PropTypes from 'prop-types';
// import React, { useContext } from 'react';
// // import { connect } from 'react-redux';
// // import { removeFilter } from '../reducers/filters';
// import { StarWarsContext } from '../context/starWarsContext';

// // filterByNumericValues: state.filterByNumericValues.filter(
// //   ({ column }) => column !== ,

// const FilterDisplay = () => {
//   const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);

//   const removeThisFilter = (filterCol) => {
//     const newFilters = filterByNumericValues.filter(
//       ({ column }) => column !== filterCol
//     );
//     setFilterByNumericValues(newFilters);
//   }
//     // const { handleChangeName } = this.props;
//   // const { filterByNumericValues, removeThisFilter } = this.props;
//   if (filterByNumericValues) {
//     return (
//       <div>
//         <h2>Filtros ativos:</h2>
//         {filterByNumericValues.map((filtro) => (
//           <div key={filtro.column} data-testid="filter">
//             <ul>
//               <li>{filtro.column}</li>
//               <li>{filtro.comparison}</li>
//               <li>{filtro.value}</li>
//             </ul>
//             <button type="button" onClick={removeThisFilter(filtro.column)}>X</button>
//           </div>
//         ))}
//       </div>
//     );
//   }
//   return null;
// }

// // const mapDispatchToProps = { removeThisFilter: removeFilter };

// // const mapStateToProps = (state) => ({
// //   filterByNumericValues: state.filters.filterByNumericValues,
// // });

// export default FilterDisplay;

// // FilterDisplay.propTypes = {
// //   filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
// //   removeThisFilter: PropTypes.func.isRequired,
// // };
