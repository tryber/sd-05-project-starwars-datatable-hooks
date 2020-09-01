// import React from 'react';
// // import { filterNumberAction } from '../actions';

// class FilterNumber extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       column: '',
//       comparison: '',
//       value: '',
//     };
//     this.hChange = this.hChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   hChange(event) {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   handleClick() {
//     const { getNumberInput } = this.props;
//     const { column, comparison, value } = this.state;
//     getNumberInput(column, comparison, value);
//   }

//   render() {
//     const { hChange, handleClick } = this;
//     const { fetching, filterNumber } = this.props;
//     const columnOptions =
//      ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
//     const comparisonOptions = ['', 'maior que', 'menor que', 'igual a'];
//     const columnFilters = filterNumber.map((filter) => filter.column);
//     const remainingColumns = columnOptions.filter((column) => !columnFilters.includes(column));
//     return (
//       <div>
//         {!fetching && (
//           <div>
//             <h4>Apply more filters:</h4>
//             <select name="column" data-testid="column-filter" onChange={hChange}>
//               {remainingColumns.map((c) => <option key={c} value={c}>{c}</option>)}
//             </select>
//             <select name="comparison" data-testid="comparison-filter" onChange={hChange}>
//               {comparisonOptions.map((c) => <option key={c} value={c}>{c}</option>)}
//             </select>
//             <input data-testid="value-filter" type="number" name="value" onChange={hChange} />
//             <button type="button" data-testid="button-filter" onClick={handleClick}>
//               Filtrar
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// // const mapStateToProps = (state) => ({
// //   fetching: state.planetReducer.fetching,
// //   filterNumber: state.filters.filterByNumericValues,
// // });

// // const mapDispatchToProps = (dispatch) => ({
// //   getNumberInput: (column, comparison, value) =>
// //     dispatch(filterNumberAction(column, comparison, value)),
// // });

// export default FilterNumber;
